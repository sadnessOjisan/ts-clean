"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DTO_1 = require("../../repository/user/DTO");
class UpdateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    updateUser(user) {
        const userDTO = DTO_1.toUpdateUserDTO(user);
        return this.userRepository.update(userDTO);
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
//# sourceMappingURL=UpdateUserUseCase.js.map