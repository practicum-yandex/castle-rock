import { DataType, Model } from "sequelize-typescript";
import { ModelAttributes } from "sequelize/types";

export interface ITheme {
	name: "dark" | "light";
}

export const themeModel: ModelAttributes<Model, ITheme> = {
	name: {
		type: DataType.STRING,
		defaultValue: "light",
	},
};
