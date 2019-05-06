import { Request, Response } from "express";
import {
  CreateUserRequest,
  TCreateUserRequest
} from "../request/user/CreateUserRequest";
import { UserSerializer } from "../serializer/UserSerializer";
import { UserRepository } from "../database/MySQL/UserRepositoryImpl";
import { FindUser } from "../../application/usecase/user/FindUserUseCase";
import { CreateUser } from "../../application/usecase/user/CreateUserUseCase";
import { UpdateUserUseCase } from "../../application/usecase/user/UpdateUserUseCase";
import { DeleteUserUseCase } from "../../application/usecase/user/DeleteUserUseCase";
import { IUpdateUserRequest } from "../request/user/UpdateUserRequest";
import { IDBConnection } from "../database/MySQL/IDBConnection";
import { User } from "../../domain/User";
import {
  TFindUserRequest,
  FindUserRequest
} from "../request/user/FindUserRequest";

class UserController {
  private userSerializer: UserSerializer;
  private userRepository: UserRepository;

  constructor(dbConnection: IDBConnection) {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepository(dbConnection);
  }

  // MEMO: これJavaだったらannotationつけるだけで例外のハンドリングできるんだよなぁ・・・
  async findUser(req: TFindUserRequest) {
    try {
      const reqBody = new FindUserRequest(req.params);
      const useCase = new FindUser(this.userRepository);
      let result = await useCase.getUser(reqBody.id);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  async findAllUser(req: Request) {
    const useCase = new FindUser(this.userRepository);
    let result = await useCase.getAllUsers();
    return this.userSerializer.users(result);
  }

  async createUser(req: TCreateUserRequest) {
    try {
      // validationをするためにもRequestクラスからのinstance化は必要そう
      const userParams = new CreateUserRequest(req.body);
      const useCase = new CreateUser(this.userRepository);
      const user = new User(null, userParams.name, userParams.age);
      let result = await useCase.createUser(user);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  async updateUser(req: IUpdateUserRequest) {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const useCase = new UpdateUserUseCase(this.userRepository);
      const user = new User(id, body.name, body.age);
      let result = await useCase.updateUser(user);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  async deleteUser(req: any) {
    try {
      const id = Number(req.params.id);
      const useCase = new DeleteUserUseCase(this.userRepository);
      await useCase.deleteUser(id);
      return this.userSerializer.delete();
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }
}

export { UserController };
