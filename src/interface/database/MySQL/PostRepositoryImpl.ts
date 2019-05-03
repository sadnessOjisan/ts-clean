/**
 * repository層ではdtoを受け取ってDBに渡す役割を担う
 */

import { Post } from "../../../domain/Post";
import { IPostRepository } from "../../../application/repository/post/IPostRepository";
import {
  TCreatePostDTO,
  TPostAndUserDTO,
  toPostAndUserDTO
} from "../../../application/repository/post/DTO";
import { IDBConnection } from "./IDBConnection";

class PostRepositoryImpl extends IPostRepository {
  private connection: IDBConnection;
  constructor(connection: IDBConnection) {
    super();
    this.connection = connection;
  }

  async find(id: number): Promise<TPostAndUserDTO> {
    const postResult = await this.connection.execute(
      "SELECT Posts.id, Posts.content, Users.name FROM Posts INNER JOIN Users ON Posts.user_id = Users.id;",
      id
    );
    if (postResult.length === 0) {
      return null;
    }
    const postAndUserDTO = postResult[0];
    return postAndUserDTO;
  }

  async findAll(): Promise<Array<TPostAndUserDTO>> {
    let queryResults = await this.connection.execute(
      "select Posts.id, Posts.content, Users.name from Posts INNER JOIN Users ON Posts.user_id = Users.id;"
    );
    return queryResults;
  }

  async create(postDTO: TCreatePostDTO): Promise<Post> {
    console.log("<create(postDTO: TCreatePostDTO)> postDTO: ", postDTO);
    const user = await this.connection.execute(
      `INSERT INTO Posts (content, user_id) VALUES ("${postDTO.content}", ${
        postDTO.userId
      })`
    );
    return user;
  }

  async delete(id: number): Promise<null> {
    await this.connection.execute("delete from Posts where id = ?", id);
    return null;
  }
}

export { PostRepositoryImpl as PostRepository };
