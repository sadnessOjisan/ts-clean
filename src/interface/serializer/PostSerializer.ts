import { Post } from "../../domain/Post";
import { ApplicationSerializer } from "./ApplicationSerializer";

type PostResponse = {
  id: number;
  content: string;
  userName: string;
};

export class PostSerializer extends ApplicationSerializer {
  post(data: PostResponse) {
    if (!data) {
      throw new Error("expect data to be not undefined nor null");
    }
    return data;
  }

  posts(data: PostResponse[]) {
    if (!data) {
      throw new Error("expect data to be not undefined nor null");
    }
    return data;
  }

  createPost(data: Post) {
    if (!data) {
      throw new Error("expect data to be not undefined nor null");
    }
    return data;
  }

  delete() {
    return {};
  }
}
