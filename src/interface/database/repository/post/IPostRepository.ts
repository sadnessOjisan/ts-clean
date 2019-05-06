import { Post } from "../../../../domain/Post";
import { TCreatePostDTO, TPostAndUserDTO } from "./DTO";

abstract class IPostRepository {
  abstract async findAll(): Promise<Array<TPostAndUserDTO>>;
  abstract async find(id: number): Promise<TPostAndUserDTO>;
  abstract async create(user: TCreatePostDTO): Promise<TPostAndUserDTO>;
  abstract async delete(id: number): Promise<null>;
}

export { IPostRepository };
