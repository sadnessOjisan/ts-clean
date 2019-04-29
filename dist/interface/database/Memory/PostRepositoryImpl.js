"use strict";
/**
 * repository層ではdtoを受け取ってDBに渡す役割を担う
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../../../domain/Post");
const IPostRepository_1 = require("../../../application/repository/post/IPostRepository");
class PostRepositoryImpl extends IPostRepository_1.IPostRepository {
    constructor() {
        super();
        const post1 = new Post_1.Post(1, "samle", 1);
        const post2 = new Post_1.Post(2, "samle2", 2);
        this.posts = [post1, post2];
    }
    convertModel(r) {
        let post = new Post_1.Post();
        post.id = r.id;
        post.content = r.content;
        post.userId = r.userId;
        return post;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResults = this.posts.filter(post => post.id === id);
            if (queryResults.length === 0) {
                return null;
            }
            return this.convertModel(queryResults[0]);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let queryResults = this.posts;
            const results = queryResults.map((m) => {
                return this.convertModel(m);
            });
            return results;
        });
    }
    create(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const postIds = this.posts.map(post => post.id);
            const maxId = Math.max.apply(null, postIds);
            const newId = maxId + 1;
            const newPost = new Post_1.Post(newId, post.content, post.userId);
            this.posts.push(newPost);
            return newPost;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.posts = this.posts.filter(post => {
                return post.id !== id;
            });
            return null;
        });
    }
}
exports.PostRepository = PostRepositoryImpl;
//# sourceMappingURL=PostRepositoryImpl.js.map