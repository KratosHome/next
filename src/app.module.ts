import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppServices} from "./app.services";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
    controllers: [AppController],
    providers: [AppServices],
    imports: [ SequelizeModule.forRoot({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'useroleg',
        password: 'root',
        database: 'useroleg',
        models: [],
        autoLoadModels: true
    }),]
})
export class AppModule {

}

