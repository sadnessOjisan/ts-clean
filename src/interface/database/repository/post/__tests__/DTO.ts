import { Post } from "../../../../../domain/Post";
import { toCreatePostDTO } from "../DTO";

describe("repository", (): void => {
  describe("post dto", (): void => {
    it("ドメインオブジェクトからCreatePostDTOを生成", (): void => {
      const post = new Post(1, "hoge", 2);
      const dto = toCreatePostDTO(post);
      const expected = {
        content: "hoge",
        userId: 2
      };
      expect(dto).toEqual(expected);
    });
  });
});
