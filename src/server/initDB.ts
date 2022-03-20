import pg from 'pg';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { commentModel } from './models/Comment';
import { threadModel } from './models/Thread';
import { userModel } from './models/User';

const sequelizeOptions: SequelizeOptions = {
  port: 5432,
  host: 'localhost',
  database: "db-game",
  dialect: "postgres",
  username: "postgres",
  password: "newPassword",
  dialectModule: pg
};

const sequelize = new Sequelize(sequelizeOptions);

export const User = sequelize.define('User', userModel, {});
export const Thread = sequelize.define('Thread', threadModel, {});
export const Comment = sequelize.define('Comment', commentModel, {});

async function dbConnect() {
  await sequelize.drop(); // remove it

	try {
    await sequelize.authenticate(); // Проверка аутентификации в БД
		await sequelize.sync(); // Синхронизация базы данных
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

dbConnect();
