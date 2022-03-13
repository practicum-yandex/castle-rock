import {
	PrimaryKey,
    Column,
    Model,
	Table,
    AutoIncrement
} from "sequelize-typescript";

@Table({
	tableName: "comment",
	underscored: true
})
export class Comment extends Model<Comment> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column
    title!: string;

    @Column
    content!: string;
}
