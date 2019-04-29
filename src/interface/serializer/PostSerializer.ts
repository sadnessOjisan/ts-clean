import { Post } from "../../domain/Post";
import { ApplicationSerializer } from "./ApplicationSerializer";

const _serializeSinglePost = (post: Post) => {
  return {
    id: post.id,
    content: post.content,
    userId: post.userId
  };
};

export class PostSerializer extends ApplicationSerializer {
  post(data: Post) {
    if (!data) {
      throw new Error("expect data to be not undefined nor null");
    }
    return _serializeSinglePost(data);
  }

  posts(data: Post[]) {
    if (!data) {
      throw new Error("expect data to be not undefined nor null");
    }
    return data.map(d => _serializeSinglePost(d));
  }

  delete() {
    return {};
  }
}
