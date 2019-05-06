import { IPostRepository } from "../../../interface/database/repository/post/IPostRepository";

class FindPostUseCase {
  private postRepository: IPostRepository;

  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  getPost(id: number) {
    return this.postRepository.find(id);
  }

  getAllPosts() {
    return this.postRepository.findAll();
  }
}

export { FindPostUseCase };
