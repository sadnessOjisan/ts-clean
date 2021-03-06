import { TCreatePostDTO, TPostAndUserDTO } from "./DTO";

abstract class IPostRepository {
  abstract async findAll(): Promise<TPostAndUserDTO[]>;
  abstract async find(id: number): Promise<TPostAndUserDTO>;
  abstract async create(user: TCreatePostDTO): Promise<TPostAndUserDTO>;
  abstract async delete(id: number): Promise<null>;
}

export { IPostRepository };
