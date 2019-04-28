import { User } from "../../domain/User";
import { IUserRepository } from "../repository/user/IUserRepository";
import { toUpdateUserDTO } from "../repository/user/DTO";

class UpdateUserUseCase {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  updateUser(user: User) {
    const userDTO = toUpdateUserDTO(user);
    return this.userRepository.update(userDTO);
  }
}

export { UpdateUserUseCase };
