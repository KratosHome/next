import {Injectable} from "@nestjs/common";

@Injectable()
export class AppServices {
    getUsers() {
        return [{id: Math.random(), name: "test"}]
    }
}
