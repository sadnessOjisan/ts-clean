/**
 * repository層ではdtoを受け取ってDBに渡す役割を担う
 */

import DB from "./MemoryDataBase";
import { Post } from "../../../domain/Post";
import { IPostRepository } from "../repository/post/IPostRepository";
import {
  TCreatePostDTO,
  TPostAndUserDTO,
  toPostAndUserDTO
} from "../repository/post/DTO";

class PostRepositoryImpl extends IPostRepository {
  constructor() {
    super();
  }

  async find(id: number): Promise<TPostAndUserDTO> | null {
    let postResult = DB.posts.filter(post => post.id === id);
    if (postResult.length === 0) {
      return null;
    }
    const post = postResult[0];
    let userResult = DB.users.filter(user => user.id === post.userId);
    if (userResult.length === 0) {
      return null;
    }
    const user = userResult[0];
    const postAndUserDTO = toPostAndUserDTO(post, user);
    return postAndUserDTO;
  }

  async findAll(): Promise<Array<TPostAndUserDTO>> {
    let queryResults = DB.posts;
    const results = queryResults.map(post => {
      const user = DB.users.find(user => user.id === post.userId);
      const userName = user ? user.name : null; // optional型がほしい
      return { id: post.id, content: post.content, userName: userName };
    });
    return results;
  }

  async create(post: TCreatePostDTO): Promise<TPostAndUserDTO> {
    const postIds = DB.posts.map(post => post.id);
    const maxId: number = Math.max.apply(null, postIds);
    const newId = maxId + 1;
    const newPost = new Post(newId, post.content, post.userId);
    DB.posts.push(newPost);
    let userResult = DB.users.filter(user => user.id === newPost.userId);
    if (userResult.length === 0) {
      return null;
    }
    const user = userResult[0];
    return toPostAndUserDTO(newPost, user);
  }

  async delete(id: number): Promise<null> {
    DB.posts = DB.posts.filter(post => {
      return post.id !== id;
    });
    return null;
  }
}

export { PostRepositoryImpl as PostRepository };
