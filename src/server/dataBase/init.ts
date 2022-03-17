import pg from "pg";
import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { userModel } from "@/models/user";
import { themeModel } from "@/models/theme";

const sequelizeOptions: SequelizeOptions = {
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "newPassword",
	database: "db-game",
	dialect: "postgres",
	dialectModule: pg,
};

const sequelize = new Sequelize(sequelizeOptions);

// Инициализируем модели
export const User = sequelize.define("User", userModel, {});
export const Theme = sequelize.define("Theme", themeModel, {});

Theme.belongsTo(User);

async function dbConnect() {
	try {
		await sequelize.authenticate(); // Проверка аутентификации в БД
		await sequelize.sync(); // Синхронизация базы данных
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

function startApp() {
	dbConnect().then(async () => {});
}

startApp();
