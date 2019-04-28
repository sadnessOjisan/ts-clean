import { IUserRepository } from "../repository/user/IUserRepository";

class DeleteUserUseCase {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}

export { DeleteUserUseCase };
