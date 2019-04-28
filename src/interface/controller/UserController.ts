import { NextFunction, Request, Response } from "express";
import {
  TCreateUserRequest,
  CreateUserRequest
} from "../request/user/CreateUserRequest";
import { UserSerializer } from "../serializer/UserSerializer";
import { UserRepository } from "../database/Memory/UserRepositoryImpl";
import { FindUser } from "../../application/usecase/FindUserUseCase";
import { CreateUser } from "../../application/usecase/user/CreateUserUseCase";
import { UpdateUserUseCase } from "../../application/usecase/UpdateUserUseCase";
import { DeleteUserUseCase } from "../../application/usecase/user/DeleteUserUseCase";
import { IDBConnection } from "../database/MySQL/IDBConnection";
import { User } from "../../domain/User";
import { TFindUserRequest } from "../request/user/FindUserRequest";

class UserController {
  private userSerializer: UserSerializer;
  private userRepository: UserRepository;

  constructor() {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepository(); // 実DB使うときはここにIDBConnectionを渡すこと
  }

  async findUser(req: TFindUserRequest, res: any) {
    try {
      const id = Number(req.params.id);
      const useCase = new FindUser(this.userRepository);
      let result = await useCase.getUser(id);
      return this.userSerializer.user(result);
    } catch {
      return this.userSerializer.error("hoge");
    }
  }

  async findAllUser(req: Request, res: any) {
    const useCase = new FindUser(this.userRepository);
    let result = await useCase.getAllUsers();
    return this.userSerializer.users(result);
  }

  async createUser(req: TCreateUserRequest, res: any) {
    const userParams = new CreateUserRequest(req.params);
    const useCase = new CreateUser(this.userRepository);
    const user = new User(null, userParams.name, userParams.age);
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
