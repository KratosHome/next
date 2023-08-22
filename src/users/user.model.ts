import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/role.model";


interface UsersCreationAttribute {
    email: string;
    password: string
}

@Table({tableName: "users"})
export class User extends Model<User, UsersCreationAttribute> {
    @ApiProperty({example: 1, description: "Унікальне поле"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: "test@gmail.com", description: "Імейл користувача"})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email: string

    @ApiProperty({example: "12345", description: "Пароль користувача"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string

    @ApiProperty({example: false, description: "Забенен или нет "})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    banned: boolean
 

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    banReason: string

    @BelongsToMany(() => Role, () => UserRole)
    roles: Role[]
}
