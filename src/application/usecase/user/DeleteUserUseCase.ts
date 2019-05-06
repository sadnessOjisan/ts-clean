import { IUserRepository } from "../../../interface/database/repository/user/IUserRepository";

class DeleteUserUseCase {
  private userRepository: IUserRepository;

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public deleteUser(id: number): Promise<null> {
    return this.userRepository.delete(id);
  }
}

export { DeleteUserUseCase };
