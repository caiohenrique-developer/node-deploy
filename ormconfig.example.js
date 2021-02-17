require("dotenv/config");

const devEnv = [
	{
		name: "default",
		type: process.env.POSTGRES_TYPE,
		host: process.env.POSTGRES_HOST,
		port: process.env.POSTGRES_PORT,
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASS,
		database: process.env.POSTGRES_DB,
		entities: [
			"./src/modules/**/infra/typeorm/entities/*.ts"
		],
		migrations: [
			"./src/shared/infra/typeorm/migrations/*.ts"
		],
		cli: {
			migrationsDir: "./src/shared/infra/typeorm/migrations"
		}
	},
	{
		name: "mongo",
		type: process.env.MONGO_TYPE,
		host: process.env.MONGO_HOST,
		port: process.env.MONGO_PORT,
		database: process.env.MONGO_DB,
		useUnifiedTopology: true,
		entities: [
			"./src/modules/**/infra/typeorm/schemas/*.ts"
		]
	}
]

const prodEnv = [
	{
		name: "default",
		type: process.env.POSTGRES_TYPE,
		host: process.env.POSTGRES_HOST,
		port: process.env.POSTGRES_PORT,
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASS,
		database: process.env.POSTGRES_DB,
		entities: [
			"./src/modules/**/infra/typeorm/entities/*.ts"
		],
		migrations: [
			"./src/shared/infra/typeorm/migrations/*.ts"
		],
		cli: {
			migrationsDir: "./src/shared/infra/typeorm/migrations"
		}
	},
	{
		name: "mongo",
		type: process.env.MONGO_TYPE,
		host: process.env.MONGO_HOST,
		port: process.env.MONGO_PORT,
		database: process.env.MONGO_DB,
		useUnifiedTopology: true,
		entities: [
			"./src/modules/**/infra/typeorm/schemas/*.ts"
		]
	}
]

module.exports = process.env.NODE_ENV === 'development' ? devEnv : prodEnv;