import pg, { Client } from "pg";
import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { userModel } from "@/models/user";

const client = new Client({
	user: "postgres",
	host: "localhost",
	database: "db-game",
	password: "newPassword",
	port: 5432,
	connectionString: "postgres://postgres:newPassword@postgres:5432/db-game",
});

client.connect(function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Connected!");
	}
});

client
	.query(`SELECT NOW()`)
	.then((res) => {
		console.log(res.rows);
		client.end();
	})
	.catch((err) => {
		console.log("error", err);
	});

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

export async function dbConnect() {
	try {
		await sequelize.authenticate(); // Проверка аутентификации в БД
		await sequelize.sync(); // Синхронизация базы данных
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}
