import DB from "../MemoryDataBase";
import { PostRepository } from "../PostRepositoryImpl";
import { Post } from "../../../../domain/Post";
import { User } from "../../../../domain/User";
import { toPostAndUserDTO, toCreatePostDTO } from "../../repository/post/DTO";

const setup = (): void => {
  DB.posts = [];
  DB.users = [];
  const samplePost1 = new Post(1, "sample", 1);
  const samplePost2 = new Post(2, "example", 1);
  const sampleUser1 = new User(1, "taro", 12);
  const sampleUser2 = new User(2, "hanako", 12);
  DB.posts.push(samplePost1);
  DB.posts.push(samplePost2);
  DB.users.push(sampleUser1);
  DB.users.push(sampleUser2);
};

describe("repository", (): void => {
  describe("memory", (): void => {
    it("DBに値が追加されている", (): void => {
      setup();
      const expected = 2;
      expect(DB.posts.length).toBe(expected);
      expect(DB.users.length).toBe(expected);
    });
    describe("PostRepositoryImpl", (): void => {
      const postRepository = new PostRepository();
      it("DBから値を1つ取り出す", async (): Promise<void> => {
        const samplePost1 = new Post(1, "sample", 1);
        const row = await postRepository.find(1);
        const user = new User(1, "taro", 12);
        const expected = toPostAndUserDTO(samplePost1, user);
        expect(row).toEqual(expected);
      });
      it("DBから全ての値を1つ取り出す", async (): Promise<void> => {
        const rows = await postRepository.findAll();
        for (let i = 0; i++; i < rows.length) {
          const row = rows[i];
          const postRow = await postRepository.find(row.id);
          expect(row).toEqual(postRow);
        }
      });
      it("DBに値を1つ追加する", async (): Promise<void> => {
        setup();
        const post = new Post(null, "hoge", 2);
        const createPostDto = toCreatePostDTO(post);
        postRepository.create(createPostDto);
        const postedRow = await postRepository.find(3);
        expect(DB.posts.length).toEqual(3);
        expect(postedRow).toEqual({
          id: 3,
          content: "hoge",
          userName: "hanako"
        });
      });
    });
  });
});
