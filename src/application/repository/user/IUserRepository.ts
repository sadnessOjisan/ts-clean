import { User } from "../../../domain/User";
import { TUpdateUserDTO, TCreateUserDTO } from "./DTO";

abstract class IUserRepository {
  abstract async findAll(): Promise<Array<User>>;
  abstract async find(id: number): Promise<User>;
  abstract async create(user: TCreateUserDTO): Promise<User>;
  abstract async update(updateUserDTO: TUpdateUserDTO): Promise<User>;
  abstract async delete(id: number): Promise<null>;
}

export { IUserRepository };
