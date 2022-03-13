import {
	Model,
	Column,
	Table,
	PrimaryKey,
	AutoIncrement
} from "sequelize-typescript";

@Table({
	tableName: "thread",
	underscored: true
})
export class Thread extends Model<Thread> {
	@AutoIncrement
	@PrimaryKey
	@Column
	id!: number;

	@Column
	title!: string;

	@Column
	content!: string;
}
