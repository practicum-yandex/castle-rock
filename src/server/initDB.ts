import pg from "pg";
import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { commentModel } from "./models/Comment";
import { threadModel } from "./models/Thread";
import { userModel } from "./models/User";
import { themeModel } from "./models/Theme";

const sequelizeOptions: SequelizeOptions = {
	port: 5432,
	host: "localhost",
	database: "db-game",
	dialect: "postgres",
	username: "postgres",
	password: "newPassword",
	dialectModule: pg,
};

const sequelize = new Sequelize(sequelizeOptions);

export const User = sequelize.define("User", userModel, {});
export const Thread = sequelize.define("Thread", threadModel, {});
export const Comment = sequelize.define("Comment", commentModel, {});
export const Theme = sequelize.define("Theme", themeModel, {});

Theme.belongsTo(User);

async function dbConnect() {
	try {
		await sequelize.authenticate(); // Проверка аутентификации в БД
		await sequelize.sync(); // Синхронизация базы данных
		console.log("Connection has been established successfully.");

		// Создание 1го пользователя для работы темизации
		User.findOrCreate(
			{
				where: {
					id: 1
				},
				defaults:{
					first_name: "test_name",
					second_name: "test_second_name",
					avatar: "test_avatar",
				}
			}
		)
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

dbConnect();
