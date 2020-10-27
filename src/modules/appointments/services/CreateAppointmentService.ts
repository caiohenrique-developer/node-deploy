import { startOfHour, isBefore, getHours, format } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

interface IRequestDTO {
	provider_id: string;
	user_id: string;
	date: Date;
}

@injectable()
class CreateAppointmentService {
	constructor(
		@inject('AppointmentsRepository')
		private appointmentsRepository: IAppointmentsRepository,

		@inject('NotificationsRepository')
		private notificationsRepository: INotificationsRepository,

		@inject('CacheProvider')
		private cacheProvider: ICacheProvider,
	) {}

	public async execute({
		date,
		provider_id,
		user_id,
	}: IRequestDTO): Promise<Appointment> {
		const appointmentDate = startOfHour(date);

		if (isBefore(appointmentDate, Date.now())) {
			throw new AppError("You can't to create an appointment on a past date.");
		}

		if (user_id === provider_id) {
			throw new AppError("You can't to create an appointmente with yourself.");
		}

		if (getHours(appointmentDate) < 8 || getHours(appointmentDate) > 17) {
			throw new AppError(
				'You can only create appointments between 8am and on the max 17pm.',
			);
		}

		const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
			appointmentDate,
			provider_id,
		);

		if (findAppointmentInSameDate) {
			throw new AppError('This appointment is already booked');
		}

		const appointment = await this.appointmentsRepository.create({
			provider_id,
			user_id,
			date: appointmentDate,
		});

		const formattedDate = format(
			appointmentDate,
			"MMM/dd/yyyy - EEE 'ás' kk:mm:ss",
		);

		await this.notificationsRepository.create({
			recipient_id: provider_id,
			content: `Novo agendamento para o dia ${formattedDate}`,
		});

		await this.cacheProvider.invalidate(
			`provider-appointments:${provider_id}:${format(
				appointmentDate,
				'yyyy-M-d',
			)}`,
		);

		return appointment;
	}
}

export default CreateAppointmentService;
