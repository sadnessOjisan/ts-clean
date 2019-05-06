import moment from "moment";
import {
  ApplicationSerializer,
  TResponse,
  StatusCode
} from "./ApplicationSerializer";
import { TPostAndUserDTO } from "../database/repository/post/DTO";

export interface PostResponse {
  id: number;
  content: string;
  userName: string;
}

export class PostSerializer extends ApplicationSerializer {
  public post(data: TPostAndUserDTO): TResponse<PostResponse> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsedAt: moment().format()
      };
    }
    return {
      code: StatusCode.success,
      data: { id: data.id, content: data.content, userName: data.userName },
      responsedAt: moment().format()
    };
  }

  public posts(data: TPostAndUserDTO[]): TResponse<PostResponse[]> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsedAt: moment().format()
      };
    }
    return {
      code: StatusCode.success,
      data: data.map(
        (d): PostResponse => {
          return { id: d.id, content: d.content, userName: d.userName };
        }
      ),
      responsedAt: moment().format()
    };
  }

  public createPost(data: TPostAndUserDTO): TResponse<PostResponse> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsedAt: moment().format()
      };
    }
    return {
      code: StatusCode.success,
      data: { id: data.id, content: data.content, userName: data.userName },
      responsedAt: moment().format()
    };
  }

  public delete(): TResponse<Record<string, null>> {
    return {
      code: StatusCode.success,
      data: {},
      responsedAt: moment().format()
    };
  }
}
