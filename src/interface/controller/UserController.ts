import { UserSerializer } from "../serializer/UserSerializer";
import { UserRepository } from "../database/Memory/UserRepository";
import { FindUser } from "../../application/usecase/FindUserUseCase";
import { CreateUser } from "../../application/usecase/CreateUserUseCase";
import { UpdateUserUseCase } from "../../application/usecase/UpdateUserUseCase";
import { DeleteUserUseCase } from "../../application/usecase/DeleteUserUseCase";
import { IDBConnection } from "../database/MySQL/IDBConnection";

class UserController {
  private userSerializer: UserSerializer;
  private userRepository: UserRepository;

  constructor() {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepository(); // 実DB使うときはここにIDBConnectionを渡すこと
  }

  async findUser(req: any, res: any) {
    try {
      console.log("req.params: ", req.params);
      const id: number = Number(req.params.id);
      const useCase = new FindUser(this.userRepository);
      let result = await useCase.getUser(id);
      return this.userSerializer.user(result);
    } catch {
      return this.userSerializer.error("hoge");
    }
  }

  async findAllUser(req: any, res: any) {
    const id = req.params.id;
    const useCase = new FindUser(this.userRepository);
    let result = await useCase.getAllUsers();
    return this.userSerializer.users(result);
  }

  async createUser(req: any, res: any) {
    const user = req.params.user;
    const useCase = new CreateUser(this.userRepository);
    let result = await useCase.createUser(user);
    return this.userSerializer.user(result);
  }

  async updateUser(req: any, res: any) {
    const user = req.params.user;
    const useCase = new UpdateUserUseCase(this.userRepository);
    let result = await useCase.updateUser(user);
    return this.userSerializer.user(result);
  }

  async deleteUser(req: any, res: any) {
    const id = req.params.id;
    const useCase = new DeleteUserUseCase(this.userRepository);
    await useCase.deleteUser(id);
    return this.userSerializer.delete();
  }
}

export { UserController };
