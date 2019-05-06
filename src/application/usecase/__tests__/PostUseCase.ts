import PostUsecase from "../post";
import { PostRepository } from "../../../interface/database/MySQL/PostRepositoryImpl";
import { MysqlConnection } from "../../../infrastructure/MysqlConnection";
import { Post } from "../../../domain/Post";
jest.mock("../../../interface/database/MySQL/PostRepositoryImpl");

const con = new MysqlConnection();
const repository = new PostRepository(con);

describe("usecase", () => {
  describe("PostUsecase", () => {
    describe("FindPostUseCase", () => {
      const usecase = new PostUsecase.FindPostUseCase(repository);
      it("constructorが動作する", () => {
        const usecase = new PostUsecase.FindPostUseCase(repository);
        expect(usecase).toBeTruthy(); // Ensure constructor created the object:
      });
      it("postRepository.findが呼ばれる", () => {
        usecase.getPost(1);
        expect(repository.find).toHaveBeenCalled();
      });
      it("postRepository.findAllが呼ばれる", () => {
        usecase.getAllPosts();
        expect(repository.findAll).toHaveBeenCalled();
      });
    });
    describe("DeletePostUseCase", () => {
      const usecase = new PostUsecase.DeletePostUseCase(repository);
      it("constructorが動作する", () => {
        expect(usecase).toBeTruthy(); // Ensure constructor created the object:
      });
      it("postRepository.delete", () => {
        usecase.deletePost(1);
        expect(repository.delete).toHaveBeenCalled();
      });
    });
    describe("CreatePostUseCase", () => {
      const usecase = new PostUsecase.CreatePostUseCase(repository);
      it("constructorが動作する", () => {
        expect(usecase).toBeTruthy(); // Ensure constructor created the object:
      });
      it("postRepository.findが呼ばれる", () => {
        const post = new Post(1, "a", 2);
        usecase.createPost(post);
        expect(repository.create).toHaveBeenCalled();
      });
    });
  });
});
