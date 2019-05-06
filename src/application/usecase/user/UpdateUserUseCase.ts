import { User } from "../../../domain/User";
import { IUserRepository } from "../../../interface/database/repository/user/IUserRepository";
import { toUpdateUserDTO } from "../../../interface/database/repository/user/DTO";

class UpdateUserUseCase {
  private userRepository: IUserRepository;

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public updateUser(user: User): Promise<User> {
    const userDTO = toUpdateUserDTO(user);
    return this.userRepository.update(userDTO);
  }
}

export { UpdateUserUseCase };
