/**
 * repository層ではdtoを受け取ってDBに渡す役割を担う
 */

import { Post } from "../../../domain/Post";
import { IPostRepository } from "../../../application/repository/post/IPostRepository";
import { TCreatePostDTO } from "../../../application/repository/post/DTO";

class PostRepositoryImpl extends IPostRepository {
  private posts: Post[];

  constructor() {
    super();
    const post1 = new Post(1, "samle", 1);
    const post2 = new Post(2, "samle2", 2);
    this.posts = [post1, post2];
  }

  private convertModel(r: any) {
    let post = new Post();
    post.id = r.id;
    post.content = r.content;
    post.userId = r.userId;
    return post;
  }

  async find(id: number): Promise<Post> | null {
    let queryResults = this.posts.filter(post => post.id === id);
    if (queryResults.length === 0) {
      return null;
    }
    return this.convertModel(queryResults[0]);
  }

  async findAll(): Promise<Array<Post>> {
    let queryResults = this.posts;
    const results = queryResults.map((m: any) => {
      return this.convertModel(m);
    });
    return results;
  }

  async create(post: TCreatePostDTO): Promise<Post> {
    const postIds = this.posts.map(post => post.id);
    const maxId: number = Math.max.apply(null, postIds);
    const newId = maxId + 1;
    const newPost = new Post(newId, post.content, post.userId);
    this.posts.push(newPost);
    return newPost;
  }

  async delete(id: number): Promise<null> {
    this.posts = this.posts.filter(post => {
      return post.id !== id;
    });
    return null;
  }
}

export { PostRepositoryImpl as PostRepository };
