import {
	Column,
	Model,
	PrimaryKey,
	Table
} from "sequelize-typescript";

@Table({
	tableName: "user",
	underscored: true
})
export class User extends Model<User> {
	@PrimaryKey
	@Column
	id!: number;

	@Column
	first_name!: string;

	@Column
	second_name!: string;

	@Column
	avatar!: string;
}
