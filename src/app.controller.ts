import {Controller, Get} from "@nestjs/common";
import {AppServices} from "./app.services";


@Controller("/api")
export class AppController {
    constructor(private appServices: AppServices) {
    }

    @Get("/users")
    getUsers() {
        return this.appServices.getUsers();
    }
}
