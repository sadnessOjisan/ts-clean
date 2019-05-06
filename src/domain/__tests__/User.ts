import { UserBusinessRule } from "../User";

describe("domain", (): void => {
  describe("user", (): void => {
    it("投稿される文字が1-11字以内かどうかを判定し受け入れる", (): void => {
      const name = "ほげほげ";
      const expected = true;
      expect(UserBusinessRule.isNameLengthValid(name)).toBe(expected);
    });
    it("投稿される文字が0字であることを判定し弾く", (): void => {
      const name = "";
      const expected = false;
      expect(UserBusinessRule.isNameLengthValid(name)).toBe(expected);
    });
    it("投稿される文字が11字であることを判定し受け入れる", (): void => {
      const name = "12345678901";
      const expected = true;
      expect(UserBusinessRule.isNameLengthValid(name)).toBe(expected);
    });
    it("投稿される文字が12字であることを判定し弾く", (): void => {
      const name = "123456789012";
      const expected = false;
      expect(UserBusinessRule.isNameLengthValid(name)).toBe(expected);
    });
  });
});
