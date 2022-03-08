import { dbConnect } from "./init";
import { User } from "./init";

import { IUser } from "@/models/user";

// Создание пользователя
export async function createUser(userData: IUser) {
	return User.create({ ...userData });
}

// Обновление пользователя по ID
export async function updateUserById(id: number, data: IUser) {
	return User.update(data, { where: { id } });
}

// Удаление пользователя по ID
export async function deleteUserById(id: number) {
	return User.destroy({ where: { id } });
}

// Получение пользователя по ID
export async function getUserById(id: number) {
	return User.findOne({ where: { id } });
}

// Получение пользователей по ID
export async function getUsersByFirstName(firstName: string) {
	return User.findAll({ where: { firstName } });
}

export function startApp() {
	dbConnect().then(async () => {
		/*
		 *  Запуск приложения только после старта БД
		 */

		// Создаем нового пользователя
		await createUser({
			first_name: "Alex",
			second_name: "Ivanov",
			login: "login",
			email: "mail@mail.ru",
			phone: "7777",
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
			phone: "7777",
		});

		// Ищем обновленного пользователя по id
		const findedUser = await getUserById(id);
		// Выводим в консоль найденного пользователя
		console.log("Finded user: ", findedUser);
	});
}

startApp();
