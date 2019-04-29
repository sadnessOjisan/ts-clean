"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    get userId() {
        return this._userId;
    }
    set userId(userId) {
        this._userId = userId;
    }
    constructor(id = null, content = null, userId = null) {
        this._id = id;
        this._content = content;
        this._userId = userId;
    }
}
exports.Post = Post;
const PostBusinessRule = {
    isPostLengthValid(postText) {
        return postText.length > 0 && postText.length < 255;
    }
};
exports.PostBusinessRule = PostBusinessRule;
//# sourceMappingURL=Post.js.map