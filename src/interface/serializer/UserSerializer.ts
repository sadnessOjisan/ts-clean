import { User } from "../../domain/User";
import moment from "moment";
import {
  ApplicationSerializer,
  TResponse,
  StatusCode
} from "./ApplicationSerializer";

export class UserSerializer extends ApplicationSerializer {
  user(data: User): TResponse<User> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsed_at: moment().format()
      };
    }
    return {
      code: StatusCode.success,
      data,
      responsed_at: moment().format()
    };
  }

  users(data: User[]): TResponse<User[]> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsed_at: moment().format()
      };
    }
    return {
      code: StatusCode.success,
      data,
      responsed_at: moment().format()
    };
  }

  delete() {
    return {};
  }
}
