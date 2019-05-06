import { PostBusinessRule } from "../Post";

describe("domain", (): void => {
  describe("post", (): void => {
    it("投稿される文字が1-254字以内かどうかを判定し受け入れる", (): void => {
      const text = "ほげほげ";
      const expected = true;
      expect(PostBusinessRule.isPostLengthValid(text)).toBe(expected);
    });
    it("投稿される文字が0字であることを判定し弾く", (): void => {
      const text = "";
      const expected = false;
      expect(PostBusinessRule.isPostLengthValid(text)).toBe(expected);
    });
    it("投稿される文字が254字であることを判定し受け入れる", (): void => {
      const text =
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
      const expected = true;
      expect(PostBusinessRule.isPostLengthValid(text)).toBe(expected);
    });
    it("投稿される文字が255字であることを判定し弾く", (): void => {
      const text =
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
      const expected = false;
      expect(PostBusinessRule.isPostLengthValid(text)).toBe(expected);
    });
  });
});
