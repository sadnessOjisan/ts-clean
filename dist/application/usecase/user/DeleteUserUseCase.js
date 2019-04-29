"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    deleteUser(id) {
        return this.userRepository.delete(id);
    }
}
exports.DeleteUserUseCase = DeleteUserUseCase;
//# sourceMappingURL=DeleteUserUseCase.js.map