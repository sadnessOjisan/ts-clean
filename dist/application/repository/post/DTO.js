"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * postドメインオブジェクトをDTOに変換する関数
 *
 * @param post postドメインオブジェクト
 */
const toCreatePostDTO = (post) => {
    return { content: post.content, userId: post.userId };
};
exports.toCreatePostDTO = toCreatePostDTO;
//# sourceMappingURL=DTO.js.map