"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeletePostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    deletePost(id) {
        return this.postRepository.delete(id);
    }
}
exports.DeletePostUseCase = DeletePostUseCase;
//# sourceMappingURL=DeletePostUseCase.js.map