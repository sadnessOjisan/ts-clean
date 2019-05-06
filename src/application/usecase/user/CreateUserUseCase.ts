import { User } from "../../../domain/User";
import { IUserRepository } from "../../../interface/database/repository/user/IUserRepository";
import { toCreateUserDTO } from "../../../interface/database/repository/user/DTO";

class CreateUser {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  createUser(user: User) {
    const userDTO = toCreateUserDTO(user);
    return this.userRepository.create(userDTO);
  }
}

export { CreateUser };
