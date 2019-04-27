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
const UserSerializer_1 = require("../serializer/UserSerializer");
const UserRepository_1 = require("../database/Memory/UserRepository");
const FindUserUseCase_1 = require("../../application/usecase/FindUserUseCase");
class UserController {
    constructor() {
        this.userSerializer = new UserSerializer_1.UserSerializer();
        this.userRepository = new UserRepository_1.UserRepository(); // 実DB使うときはここにIDBConnectionを渡すこと
    }
    findUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("req.params: ", req.params);
                const id = Number(req.params.id);
                const useCase = new FindUserUseCase_1.FindUser(this.userRepository);
                let result = yield useCase.getUser(id);
                return this.userSerializer.user(result);
            }
            catch (_a) {
                return this.userSerializer.error("hoge");
            }
        });
    }
    findAllUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const useCase = new FindUserUseCase_1.FindUser(this.userRepository);
            let result = yield useCase.getAllUsers();
            return this.userSerializer.users(result);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map