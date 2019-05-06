import { User } from '../../../domain/User';
import { IUserRepository } from '../../../interface/database/repository/user/IUserRepository';
import { toUpdateUserDTO } from '../../../interface/database/repository/user/DTO';

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
