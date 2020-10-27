import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
	public async create(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body;

		// create a instance with my service
		const authenticateUser = container.resolve(AuthenticateUserService);

		// return a response of the method execute of my service
		const { user, token } = await authenticateUser.execute({ email, password });

		return response.json({ user: classToClass(user), token });
	}
}
