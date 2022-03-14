import { DataType, Model } from "sequelize-typescript";
import { ModelAttributes } from "sequelize/types";

export interface IUser {
	first_name: string;
	second_name: string;
	login: string;
	email: string;
	phone: string;
}

export const userModel: ModelAttributes<Model, IUser> = {
	first_name: {
		type: DataType.STRING,
		allowNull: false,
	},
	second_name: {
		type: DataType.STRING,
	},
	login: {
		type: DataType.STRING,
	},
	email: {
		type: DataType.STRING,
	},
	phone: {
		type: DataType.STRING,
	},
};
