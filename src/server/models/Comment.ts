import {  DataType, Model } from "sequelize-typescript";
import { ModelAttributes } from "sequelize/types";

interface IComment {
	id: number;
	title: string;
	content: string;
	thread_id: number;
}


export const commentModel: ModelAttributes<Model, IComment>= {
	id: {
		type: DataType.INTEGER,
        allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},

	title: {
		type: DataType.STRING
	},

	content: {
		type: DataType.STRING
	},

	thread_id: {
		type: DataType.INTEGER,
		allowNull: false
	}
};
