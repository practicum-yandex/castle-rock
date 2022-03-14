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
export async function getUsersByFirstName(first_name: string) {
	return User.findAll({ where: { first_name } });
}
