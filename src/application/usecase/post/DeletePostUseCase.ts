import { IPostRepository } from '../../../interface/database/repository/post/IPostRepository';

class DeletePostUseCase {
  private postRepository: IPostRepository;

  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  deletePost(id: number) {
    return this.postRepository.delete(id);
  }
}

export { DeletePostUseCase };
