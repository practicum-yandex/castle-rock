import pg, { Client } from "pg";
import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { userModel } from "@/models/user";

import {
	createUser,
	getUsersByFirstName,
	updateUserById,
	getUserById,
} from "./user";

const client = new Client({
	user: "postgres",
	host: "localhost",
	database: "db-game",
	password: "newPassword",
	port: 5432,
});

client.connect();

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
	dbConnect().then(async () => {
		// Тест работы БД (удалить в дальнейшем)
		// Создаем нового пользователя
		await createUser({
			first_name: "Alex",
			second_name: "Ivanov",
			login: "login",
			email: "mail@mail.ru",
			phone: "77777",
		});
		// Получаем пользователей с именем Alex
		const users = await getUsersByFirstName("Alex");

		// Проверяем, найдены ли пользователи
		if (!users.length) {
			throw "Not found";
		}

		// Получаем id первого пользователя
		const { id } = users[0];

		// Обновляем пользователя по ID
		await updateUserById(id, {
			first_name: "Ivan",
			second_name: "Ivanov",
			login: "login2",
			email: "mail@mail.ru",
			phone: "8888",
		});

		// Ищем обновленного пользователя по id
		const findedUser = await getUserById(id);
		// Выводим в консоль найденного пользователя
		console.log("Finded user: ", findedUser);
	});
}

startApp();
