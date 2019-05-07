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
  public constructor() {
    super();
  }

  public async find(id: number): Promise<TPostAndUserDTO> | null {
    let postResult = DB.posts.filter((post): boolean => post.id === id);
    if (postResult.length === 0) {
      return null;
    }
    const post = postResult[0];
    let userResult = DB.users.filter(
      (user): boolean => user.id === post.userId
    );
    if (userResult.length === 0) {
      return null;
    }
    const user = userResult[0];
    const postAndUserDTO = toPostAndUserDTO(post, user);
    return postAndUserDTO;
  }

  public async findAll(): Promise<TPostAndUserDTO[]> {
    let queryResults = DB.posts;
    const results = queryResults.map(
      (post): TPostAndUserDTO => {
        const user = DB.users.find((user): boolean => user.id === post.userId);
        const userName = user ? user.name : null; // optional型がほしい
        return { id: post.id, content: post.content, userName: userName };
      }
    );
    return results;
  }

  public async create(post: TCreatePostDTO): Promise<TPostAndUserDTO> {
    const postIds = DB.posts.map((post): number => post.id);
    const maxId: number =
      postIds.length === 0 ? 0 : Math.max.apply(null, postIds);
    const newId = maxId + 1;
    const newPost = new Post(newId, post.content, post.userId);
    DB.posts.push(newPost);
    let userResult = DB.users.filter(
      (user): boolean => user.id === newPost.userId
    );
    if (userResult.length === 0) {
      return null;
    }
    const user = userResult[0];
    return toPostAndUserDTO(newPost, user);
  }

  public async delete(id: number): Promise<null> {
    DB.posts = DB.posts.filter(
      (post): boolean => {
        return post.id !== id;
      }
    );
    return null;
  }
}

export { PostRepositoryImpl as PostRepository };
