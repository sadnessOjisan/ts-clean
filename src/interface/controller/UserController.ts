import {
  CreateUserRequest,
  TCreateUserRequest
} from "../request/user/CreateUserRequest";
import { UserSerializer, UserResponse } from "../serializer/UserSerializer";
import { UserRepository } from "../database/MySQL/UserRepositoryImpl";
import UserUseCase from "../../application/usecase/user";
import { UpdateUserRequest } from "../request/user/UpdateUserRequest";
import { IDBConnection } from "../database/MySQL/IDBConnection";
import { User } from "../../domain/User";
import {
  TFindUserRequest,
  FindUserRequest
} from "../request/user/FindUserRequest";
import { TResponse } from "../serializer/ApplicationSerializer";
import { TDeleteUserRequest } from "../request/user/DeleteUserRequest";

class UserController {
  private userSerializer: UserSerializer;
  private userRepository: UserRepository;

  public constructor(dbConnection: IDBConnection) {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepository(dbConnection);
  }

  // MEMO: これJavaだったらannotationつけるだけで例外のハンドリングできるんだよなぁ・・・
  public async findUser(
    req: TFindUserRequest
  ): Promise<TResponse<UserResponse> | TResponse<{}>> {
    try {
      const reqBody = new FindUserRequest(req.params);
      const useCase = new UserUseCase.FindUserUseCase(this.userRepository);
      let result = await useCase.getUser(reqBody.id);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  // TODO: asyncは不要
  public async findAllUser(): Promise<
    TResponse<UserResponse[]> | TResponse<{}>
  > {
    const useCase = new UserUseCase.FindUserUseCase(this.userRepository);
    let result = await useCase.getAllUsers();
    return this.userSerializer.users(result);
  }

  public async createUser(
    req: TCreateUserRequest
  ): Promise<TResponse<UserResponse> | TResponse<{}>> {
    try {
      // MEMO: validationをするためにもRequestクラスからのinstance化は必要そう
      const userParams = new CreateUserRequest(req.body);
      const useCase = new UserUseCase.CreateUserUseCase(this.userRepository);
      const user = new User(null, userParams.name, userParams.age);
      let result = await useCase.createUser(user);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  public async updateUser(
    req: UpdateUserRequest
  ): Promise<TResponse<UserResponse> | TResponse<{}>> {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const useCase = new UserUseCase.UpdateUserUseCase(this.userRepository);
      const user = new User(id, body.name, body.age);
      let result = await useCase.updateUser(user);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  public async deleteUser(
    req: TDeleteUserRequest
  ): Promise<TResponse<Record<string, null>> | TResponse<{}>> {
    try {
      const id = Number(req.params.id);
      const useCase = new UserUseCase.DeleteUserUseCase(this.userRepository);
      await useCase.deleteUser(id);
      return this.userSerializer.delete();
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }
}

export { UserController };
