"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../../../domain/Post");
class CreatePostRequest {
    get content() {
        return this._content;
    }
    get userId() {
        return this._userId;
    }
    constructor(params) {
        this.valid(params);
        this._content = params.content;
        this._userId = params.userId;
    }
    valid(params) {
        if (!Post_1.PostBusinessRule.isPostLengthValid(params.content)) {
            throw new Error("1以上255以下の文字数でおねがいします");
        }
    }
}
exports.CreatePostRequest = CreatePostRequest;
//# sourceMappingURL=CreatePostRequest.js.map