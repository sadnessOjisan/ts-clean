import { User } from "../../domain/User";
import moment from "moment";
import {
  ApplicationSerializer,
  TResponse,
  StatusCode
} from "./ApplicationSerializer";

type UserResponse = {
  id: number;
  name: string;
  age: number;
};

export class UserSerializer extends ApplicationSerializer {
  user(data: User): TResponse<UserResponse> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsed_at: moment().format()
      };
    }
    return {
      code: StatusCode.success,
      data: {
        id: data.id,
        name: data.name,
        age: data.age
      },
      responsed_at: moment().format()
    };
  }

  users(data: User[]): TResponse<UserResponse[]> {
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
        return {
          id: d.id,
          name: d.name,
          age: d.age
        };
      }),
      responsed_at: moment().format()
    };
  }

  delete() {
    return {};
  }
}
