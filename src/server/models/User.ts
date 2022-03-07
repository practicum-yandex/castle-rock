import {
	Column,
	Model,
	PrimaryKey,
	Table
} from "sequelize-typescript";

@Table({
	tableName: "user",
	underscored: true,
	timestamps: false,
})
export class User extends Model<User> {
	@PrimaryKey
	@Column
	id!: number;

	@Column
	themeName!: string;

	@Column
	name!: string;

	@Column
	avatar!: string;
}
