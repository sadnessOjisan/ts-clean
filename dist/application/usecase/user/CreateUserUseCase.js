"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DTO_1 = require("../../repository/user/DTO");
class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    createUser(user) {
        const userDTO = DTO_1.toCreateUserDTO(user);
        return this.userRepository.create(userDTO);
    }
}
exports.CreateUser = CreateUser;
//# sourceMappingURL=CreateUserUseCase.js.map