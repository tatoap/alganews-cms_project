import Service from "../Service";
import { User } from './../@types/User'

class UserService extends Service {
    static getAllUsers () {
        return this.Http
            .get<User.EditorSummary[]>('/users/editors')
            .then(this.getData)
    }
}

export default UserService