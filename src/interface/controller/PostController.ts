import {
  CreatePostRequest,
  TCreatePostRequest
} from "../request/post/CreatePostRequest";
import { PostSerializer, PostResponse } from "../serializer/PostSerializer";
import { PostRepository } from "../database/MySQL/PostRepositoryImpl";
import PostUseCase from "../../application/usecase/post";
import { Post } from "../../domain/Post";
import { TFindUserRequest } from "../request/user/FindUserRequest";
import { IDBConnection } from "../database/MySQL/IDBConnection";
import { TDeletePostRequest } from "../request/post/DeletePostRequest";
import { TResponse } from "../serializer/ApplicationSerializer";

class PostController {
  private postSerializer: PostSerializer;
  private postRepository: PostRepository;

  public constructor(dbConnection: IDBConnection) {
    this.postSerializer = new PostSerializer();
    this.postRepository = new PostRepository(dbConnection);
  }

  public async findPost(
    req: TFindUserRequest
  ): Promise<TResponse<PostResponse> | TResponse<{}>> {
    try {
      const id = Number(req.params.id);
      const useCase = new PostUseCase.FindPostUseCase(this.postRepository);
      let result = await useCase.getPost(id);
      return this.postSerializer.post(result);
    } catch (error) {
      return this.postSerializer.error(error);
    }
  }

  public async findAllPost(): Promise<
    TResponse<PostResponse[]> | TResponse<{}>
  > {
    const useCase = new PostUseCase.FindPostUseCase(this.postRepository);
    let result = await useCase.getAllPosts();
    return this.postSerializer.posts(result);
  }

  public async createPost(
    req: TCreatePostRequest
  ): Promise<TResponse<PostResponse> | TResponse<{}>> {
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

  public async deletePost(
    req: TDeletePostRequest
  ): Promise<TResponse<Record<string, null>> | TResponse<{}>> {
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
