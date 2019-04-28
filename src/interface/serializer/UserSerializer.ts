import { User } from "../../domain/User";
import { ApplicationSerializer } from "./ApplicationSerializer";

const _serializeSingleUser = (user: User) => {
  return {
    name: user.name,
    age: user.age
  };
};

export class UserSerializer extends ApplicationSerializer {
  user(data: User) {
    if (!data) {
      throw new Error("expect data to be not undefined nor null");
    }
    return _serializeSingleUser(data);
  }

  users(data: User[]) {
    if (!data) {
      throw new Error("expect data to be not undefined nor null");
    }
    return data.map(d => _serializeSingleUser(d));
  }

  delete() {
    return {};
  }
}
