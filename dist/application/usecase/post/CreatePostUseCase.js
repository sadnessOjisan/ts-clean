"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DTO_1 = require("../../repository/post/DTO");
class CreatePostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    createPost(post) {
        const postDTO = DTO_1.toCreatePostDTO(post);
        return this.postRepository.create(postDTO);
    }
}
exports.CreatePostUseCase = CreatePostUseCase;
//# sourceMappingURL=CreatePostUseCase.js.map