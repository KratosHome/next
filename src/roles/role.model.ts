import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/user.model";


interface RoleCreationAttribute {
    value: string;
    description: string
}

@Table({tableName: "roles"})
export class Role extends Model<Role, RoleCreationAttribute> {
    @ApiProperty({example: 1, description: "Унікальне поле"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: "ADMIN", description: "Значення ролі"})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    value: string

    @ApiProperty({example: "Адміністратор ", description: "Опис ролі"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string

    @BelongsToMany(() => User, () => UserRole)
    users: User[]
}
