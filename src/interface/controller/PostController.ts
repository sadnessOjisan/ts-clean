import { Request } from "express";
import {
  CreatePostRequest,
  TCreatePostRequest
} from "../request/post/CreatePostRequest";
import { PostSerializer } from "../serializer/PostSerializer";
import { PostRepository } from "../database/Memory/PostRepositoryImpl";
import PostUseCase from "../../application/usecase/post";
import { Post } from "../../domain/Post";
import { TFindUserRequest } from "../request/user/FindUserRequest";

class PostController {
  private postSerializer: PostSerializer;
  private postRepository: PostRepository;

  constructor() {
    this.postSerializer = new PostSerializer();
    this.postRepository = new PostRepository(); // 実DB使うときはここにIDBConnectionを渡すこと
  }

  async findPost(req: TFindUserRequest, res: any) {
    try {
      const id = Number(req.params.id);
      const useCase = new PostUseCase.FindPostUseCase(this.postRepository);
      let result = await useCase.getPost(id);
      return this.postSerializer.post(result);
    } catch {
      return this.postSerializer.error("hoge");
    }
  }

  async findAllPost(req: Request, res: any) {
    const useCase = new PostUseCase.FindPostUseCase(this.postRepository);
    let result = await useCase.getAllPosts();
    return this.postSerializer.posts(result);
  }

  async createPost(req: TCreatePostRequest, res: any) {
    try {
      const params = new CreatePostRequest(req.body);
      console.log(params);
      const useCase = new PostUseCase.CreatePostUseCase(this.postRepository);
      const post = new Post(null, params.content, params.userId);
      let result = await useCase.createPost(post);
      return this.postSerializer.createPost(result);
    } catch {
      return this.postSerializer.error("hoge");
    }
  }

  async deletePost(req: any, res: any) {
    try {
      const id = Number(req.params.id);
      const useCase = new PostUseCase.DeletePostUseCase(this.postRepository);
      await useCase.deletePost(id);
      return this.postSerializer.delete();
    } catch {
      return this.postSerializer.error("hoge");
    }
  }
}

export { PostController };
