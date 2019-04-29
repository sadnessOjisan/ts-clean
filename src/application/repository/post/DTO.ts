import { User } from "../../../domain/User";
import { Post } from "../../../domain/Post";

type TCreatePostDTO = { content: string; userId: number };

type TPostAndUserDTO = { id: number; content: string; userName: string };

/**
 * postドメインオブジェクトをDTOに変換する関数
 *
 * @param post postドメインオブジェクト
 */
const toCreatePostDTO = (post: Post): TCreatePostDTO => {
  return { content: post.content, userId: post.userId };
};

const toPostAndUserDTO = (post: Post, user: User): TPostAndUserDTO => {
  return { id: post.id, content: post.content, userName: user.name };
};

export { TCreatePostDTO, toCreatePostDTO, TPostAndUserDTO, toPostAndUserDTO };
