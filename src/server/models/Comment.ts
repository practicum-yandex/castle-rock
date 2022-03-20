import {  DataType, Model } from "sequelize-typescript";
import { ModelAttributes } from "sequelize/types";

interface IComment {
	id: number;
	content: string;
	user_name: string;
	thread_id: number;
}


export const commentModel: ModelAttributes<Model, IComment>= {
	id: {
		type: DataType.INTEGER,
        allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},

	content: {
		type: DataType.STRING
	},

	user_name: {
		type: DataType.STRING
	},

	thread_id: {
		type: DataType.INTEGER,
		allowNull: false
	}
};
