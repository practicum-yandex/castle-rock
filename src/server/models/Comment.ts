import {  DataType, Model } from "sequelize-typescript";
import { ModelAttributes } from "sequelize/types";

interface IComment {
	id: number;
	title: string;
	content: string;
}

export const commentModel: ModelAttributes<Model, IComment>= {
	id: {
		type: DataType.INTEGER,
        allowNull: false,
		primaryKey: true
	},

	title: {
		type: DataType.STRING
	},

	content: {
		type: DataType.STRING
	}
};
