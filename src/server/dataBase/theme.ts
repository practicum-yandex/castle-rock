import { Theme } from "./init";

import { ITheme } from "@/models/theme";

// Получение записи темы по id пользователя
export async function getThemeByUserId(userId: number) {
	return Theme.findOne({ where: { UserID: userId } });
}

// Установка значения темы по id пользователя
export async function updateTheme(userId: number, data: ITheme) {
	const userTheme = await getThemeByUserId(userId);
	return userTheme
		? Theme.update(data, { where: { UserId: userId } })
		: Theme.create({ ...data, UserId: userId });
}
