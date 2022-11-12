module.exports = ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
			host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'theunion_mysql'),
			user: env('DATABASE_USERNAME', 'theunion'),
			password: env('DATABASE_PASSWORD', 'theunion'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
