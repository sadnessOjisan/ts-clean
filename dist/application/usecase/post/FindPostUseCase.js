"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FindPostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    getPost(id) {
        return this.postRepository.find(id);
    }
    getAllPosts() {
        return this.postRepository.findAll();
    }
}
exports.FindPostUseCase = FindPostUseCase;
//# sourceMappingURL=FindPostUseCase.js.map