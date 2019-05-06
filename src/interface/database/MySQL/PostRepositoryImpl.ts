/**
 * repository層ではdtoを受け取ってDBに渡す役割を担う
 */

import { Post } from "../../../domain/Post";
import { IPostRepository } from "../repository/post/IPostRepository";
import { TCreatePostDTO, TPostAndUserDTO } from "../repository/post/DTO";
import { IDBConnection } from "./IDBConnection";

class PostRepositoryImpl extends IPostRepository {
  private connection: IDBConnection;
  constructor(connection: IDBConnection) {
    super();
    this.connection = connection;
  }

  async find(id: number): Promise<TPostAndUserDTO> {
    const postResult = await this.connection.execute(
      "SELECT Posts.id, Posts.content, Users.name AS userName FROM Posts INNER JOIN Users ON Posts.user_id = Users.id;",
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
      "select Posts.id, Posts.content, Users.name AS userName from Posts INNER JOIN Users ON Posts.user_id = Users.id;"
    );
    return queryResults;
  }

  /**
   * createしたものを取り出す処理がガバガバ。他の人に挿入されると詰む。あとで治す
   * @param postDTO
   */
  async create(postDTO: TCreatePostDTO): Promise<TPostAndUserDTO> {
    await this.connection.execute(
      `INSERT INTO Posts (content, user_id) VALUES ("${postDTO.content}", ${
        postDTO.userId
      })`
    );
    const idRow = await this.connection.execute("SELECT LAST_INSERT_ID();");
    const id = idRow[0]["LAST_INSERT_ID()"];
    const postResult = await this.connection.execute(
      "SELECT Posts.id, Posts.content, Users.name AS userName FROM Posts INNER JOIN Users ON Posts.user_id = Users.id;",
      id
    );
    if (postResult.length === 0) {
      return null;
    }
    const postAndUserDTO = postResult[0];
    return postAndUserDTO;
  }

  async delete(id: number): Promise<null> {
    await this.connection.execute("delete from Posts where id = ?", id);
    return null;
  }
}

export { PostRepositoryImpl as PostRepository };
