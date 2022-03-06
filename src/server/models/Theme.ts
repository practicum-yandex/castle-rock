import {
	Model, 
    DataType, 
    Table, 
    Index, 
    PrimaryKey, 
    Column, 
    HasMany
} from "sequelize-typescript";
import { User } from "./User";

@Table({
	tableName: "theme",
	timestamps: false,
})
export class Theme extends Model<Theme> {
	@Index
	@PrimaryKey
	@Column
	name!: string;

	@Column(DataType.JSONB)
	theme!: string;

	@HasMany(() => User)
	users!: User[];
}
