"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../domain/User");
const IUserRepository_1 = require("../../../application/repository/user/IUserRepository");
class UserRepository extends IUserRepository_1.IUserRepository {
    constructor(connection) {
        super();
        this.connection = connection;
    }
    convertModel(r) {
        let user = new User_1.User();
        user.name = r.name;
        user.age = r.age;
        return user;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResults = yield this.connection.execute("select * from users where id = ? limit 1", id);
            return this.convertModel(queryResults[0]);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResults = yield this.connection.execute("select * from Users");
            const results = queryResults.map((m) => {
                return this.convertModel(m);
            });
            return results;
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map