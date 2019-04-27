import { IUserRepository } from "../repository/user/IUserRepository";

class FindUser {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  execute(id: number) {
    return this.userRepository.find(id);
  }

  getUser(id: number) {
    return this.userRepository.find(id);
  }

  getAllUsers() {
    return this.userRepository.findAll();
  }
}

export { FindUser };
