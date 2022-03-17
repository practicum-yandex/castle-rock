import { DataType, Model } from "sequelize-typescript";
import { ModelAttributes } from "sequelize/types";

interface IUser {
	id: number;
	first_name: string;
	second_name: string;
	avatar: string;
}

export const userModel: ModelAttributes<Model, IUser>= {
	id: {
		type: DataType.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},

	first_name: {
		type: DataType.STRING
	},

	second_name: {
		type: DataType.STRING
	},

	avatar: {
		type: DataType.STRING
	}
};
