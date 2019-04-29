import { Post } from "../../../domain/Post";

type TCreatePostDTO = { content: string; userId: number };

/**
 * postドメインオブジェクトをDTOに変換する関数
 *
 * @param post postドメインオブジェクト
 */
const toCreatePostDTO = (post: Post): TCreatePostDTO => {
  return { content: post.content, userId: post.userId };
};

export { TCreatePostDTO, toCreatePostDTO };
