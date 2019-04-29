import { Post } from "../../../domain/Post";
import { TCreatePostDTO } from "./DTO";

abstract class IPostRepository {
  abstract async findAll(): Promise<Array<Post>>;
  abstract async find(id: number): Promise<Post>;
  abstract async create(user: TCreatePostDTO): Promise<Post>;
  abstract async delete(id: number): Promise<null>;
}

export { IPostRepository };
