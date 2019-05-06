import { IUserRepository } from "../../../interface/database/repository/user/IUserRepository";

class FindUser {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  getUser(id: number) {
    return this.userRepository.find(id);
  }

  getAllUsers() {
    return this.userRepository.findAll();
  }
}

export { FindUser };
