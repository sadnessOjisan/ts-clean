import {
  CreatePostRequest,
  TCreatePostRequest
} from '../request/post/CreatePostRequest';
import { PostSerializer } from '../serializer/PostSerializer';
import { PostRepository } from '../database/MySQL/PostRepositoryImpl';
import PostUseCase from '../../application/usecase/post';
import { Post } from '../../domain/Post';
import { TFindUserRequest } from '../request/user/FindUserRequest';
import { IDBConnection } from '../database/MySQL/IDBConnection';

class PostController {
  private postSerializer: PostSerializer;
  private postRepository: PostRepository;

  constructor(dbConnection: IDBConnection) {
    this.postSerializer = new PostSerializer();
    this.postRepository = new PostRepository(dbConnection);
  }

  async findPost(req: TFindUserRequest) {
    try {
      const id = Number(req.params.id);
      const useCase = new PostUseCase.FindPostUseCase(this.postRepository);
      let result = await useCase.getPost(id);
      return this.postSerializer.post(result);
    } catch (error) {
      return this.postSerializer.error(error);
    }
  }

  async findAllPost() {
    const useCase = new PostUseCase.FindPostUseCase(this.postRepository);
    let result = await useCase.getAllPosts();
    return this.postSerializer.posts(result);
  }

  async createPost(req: TCreatePostRequest) {
    try {
      const params = new CreatePostRequest(req.body);
      const useCase = new PostUseCase.CreatePostUseCase(this.postRepository);
      const post = new Post(null, params.content, params.userId);
      let result = await useCase.createPost(post);
      return this.postSerializer.createPost(result);
    } catch (error) {
      return this.postSerializer.error(error);
    }
  }

  async deletePost(req: any) {
    try {
      const id = Number(req.params.id);
      const useCase = new PostUseCase.DeletePostUseCase(this.postRepository);
      await useCase.deletePost(id);
      return this.postSerializer.delete();
    } catch (error) {
      return this.postSerializer.error(error);
    }
  }
}

export { PostController };
