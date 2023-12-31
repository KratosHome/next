import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";
import {Role} from "../roles/role.model";

@Module({
  controllers: [UsersController],
  providers:  [UsersService],
  imports: [
      SequelizeModule.forFeature([User, Role])
  ]
})
export class UsersModule {}
