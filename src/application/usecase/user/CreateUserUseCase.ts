import { User } from "../../../domain/User";
import { IUserRepository } from "../../../interface/database/repository/user/IUserRepository";
import { toCreateUserDTO } from "../../../interface/database/repository/user/DTO";

class CreateUserUseCase {
  private userRepository: IUserRepository;

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public createUser(user: User): Promise<User> {
    const userDTO = toCreateUserDTO(user);
    return this.userRepository.create(userDTO);
  }
}

export { CreateUserUseCase };
