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
const CreateUserRequest_1 = require("../request/user/CreateUserRequest");
const UserSerializer_1 = require("../serializer/UserSerializer");
const UserRepositoryImpl_1 = require("../database/Memory/UserRepositoryImpl");
const FindUserUseCase_1 = require("../../application/usecase/user/FindUserUseCase");
const CreateUserUseCase_1 = require("../../application/usecase/user/CreateUserUseCase");
const UpdateUserUseCase_1 = require("../../application/usecase/user/UpdateUserUseCase");
const DeleteUserUseCase_1 = require("../../application/usecase/user/DeleteUserUseCase");
const User_1 = require("../../domain/User");
class UserController {
    constructor() {
        this.userSerializer = new UserSerializer_1.UserSerializer();
        this.userRepository = new UserRepositoryImpl_1.UserRepository(); // 実DB使うときはここにIDBConnectionを渡すこと
    }
    // MEMO: これJavaだったらannotationつけるだけで例外のハンドリングできるんだよなぁ・・・
    findUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
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
            const useCase = new FindUserUseCase_1.FindUser(this.userRepository);
            let result = yield useCase.getAllUsers();
            return this.userSerializer.users(result);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validationをするためにもRequestクラスからのinstance化は必要そう
                const userParams = new CreateUserRequest_1.CreateUserRequest(req.body);
                const useCase = new CreateUserUseCase_1.CreateUser(this.userRepository);
                const user = new User_1.User(null, userParams.name, userParams.age);
                let result = yield useCase.createUser(user);
                return this.userSerializer.user(result);
            }
            catch (_a) {
                return this.userSerializer.error("hoge");
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const body = req.body;
                const useCase = new UpdateUserUseCase_1.UpdateUserUseCase(this.userRepository);
                const user = new User_1.User(id, body.name, body.age);
                let result = yield useCase.updateUser(user);
                return this.userSerializer.user(result);
            }
            catch (_a) {
                return this.userSerializer.error("hoge");
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const useCase = new DeleteUserUseCase_1.DeleteUserUseCase(this.userRepository);
                yield useCase.deleteUser(id);
                return this.userSerializer.delete();
            }
            catch (_a) {
                return this.userSerializer.error("hoge");
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map