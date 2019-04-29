"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationSerializer_1 = require("./ApplicationSerializer");
const _serializeSinglePost = (post) => {
    return {
        id: post.id,
        content: post.content,
        userId: post.userId
    };
};
class PostSerializer extends ApplicationSerializer_1.ApplicationSerializer {
    post(data) {
        if (!data) {
            throw new Error("expect data to be not undefined nor null");
        }
        return _serializeSinglePost(data);
    }
    posts(data) {
        if (!data) {
            throw new Error("expect data to be not undefined nor null");
        }
        return data.map(d => _serializeSinglePost(d));
    }
    delete() {
        return {};
    }
}
exports.PostSerializer = PostSerializer;
//# sourceMappingURL=PostSerializer.js.map