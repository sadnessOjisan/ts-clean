import { User } from "../../../domain/User";

abstract class IUserRepository {
  abstract async findAll(): Promise<Array<User>>;
  abstract async find(id: number): Promise<User>;
}

export { IUserRepository };
