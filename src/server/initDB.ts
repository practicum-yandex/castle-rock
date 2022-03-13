import pg from 'pg';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Thread } from './models/Thread';
import { Comment } from './models/Comment';
import { User } from './models/User';

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
  username: "postgres",
  password: "newPassword",
  database: "db-game",
  dialect: "postgres",
  dialectModule: pg,
  models: [Thread, User, Comment],
};

const sequelize = new Sequelize(sequelizeOptions);

async function dbConnect() {
	try {
    await sequelize.authenticate(); // Проверка аутентификации в БД
		await sequelize.sync(); // Синхронизация базы данных
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

dbConnect();
