import { Post } from "../../../domain/Post";
import { IPostRepository } from "../../repository/post/IPostRepository";
import { toCreatePostDTO } from "../../repository/post/DTO";

class CreatePostUseCase {
  private postRepository: IPostRepository;

  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  createPost(post: Post) {
    const postDTO = toCreatePostDTO(post);
    return this.postRepository.create(postDTO);
  }
}

export { CreatePostUseCase };
