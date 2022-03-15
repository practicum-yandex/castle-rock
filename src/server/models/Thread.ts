import { DataType, Model } from "sequelize-typescript";
import { ModelAttributes } from "sequelize/types";

interface IThread {
	id: number;
	title: string;
	content: string;
}

export const threadModel: ModelAttributes<Model, IThread>= {
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
