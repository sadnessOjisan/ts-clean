"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(id) {
        return this.userRepository.find(id);
    }
    getUser(id) {
        return this.userRepository.find(id);
    }
    getAllUsers() {
        return this.userRepository.findAll();
    }
}
exports.FindUser = FindUser;
//# sourceMappingURL=FindUserUseCase.js.map