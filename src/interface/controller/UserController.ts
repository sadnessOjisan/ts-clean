import { UserSerializer } from "../serializer/UserSerializer";
import { UserRepository } from "../database/Memory/UserRepository";
import { FindUser } from "../../application/usecase/FindUserUseCase";
import { IDBConnection } from "../database/MySQL/IDBConnection";

class UserController {
  private userSerializer: UserSerializer;
  private userRepository: UserRepository;

  constructor() {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepository();
  }

  async findUser(req: any, res: any) {
    const id = req.params.id;
    const useCase = new FindUser(this.userRepository);
    let result = await useCase.getUser(id);
    return this.userSerializer.user(result);
  }

  async findAllUser(req: any, res: any) {
    const id = req.params.id;
    const useCase = new FindUser(this.userRepository);
    let result = await useCase.getAllUsers();
    return this.userSerializer.users(result);
  }
}

export { UserController };
