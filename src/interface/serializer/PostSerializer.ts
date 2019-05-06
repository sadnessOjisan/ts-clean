import moment from "moment";
import {
  ApplicationSerializer,
  TResponse,
  StatusCode
} from "./ApplicationSerializer";
import { TPostAndUserDTO } from "../database/repository/post/DTO";

interface PostResponse {
  id: number;
  content: string;
  userName: string;
}

export class PostSerializer extends ApplicationSerializer {
  post(data: TPostAndUserDTO): TResponse<PostResponse> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsed_at: moment().format()
      };
    }
    return {
      code: StatusCode.success,
      data: { id: data.id, content: data.content, userName: data.userName },
      responsed_at: moment().format()
    };
  }

  posts(data: TPostAndUserDTO[]): TResponse<PostResponse[]> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsed_at: moment().format()
      };
    }
    return {
      code: StatusCode.success,
      data: data.map(d => {
        return { id: d.id, content: d.content, userName: d.userName };
      }),
      responsed_at: moment().format()
    };
  }

  createPost(data: TPostAndUserDTO): TResponse<PostResponse> {
    console.log("data: ", data);
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsed_at: moment().format()
      };
    }
    return {
      code: StatusCode.success,
      data: { id: data.id, content: data.content, userName: data.userName },
      responsed_at: moment().format()
    };
  }

  delete() {
    return {};
  }
}
