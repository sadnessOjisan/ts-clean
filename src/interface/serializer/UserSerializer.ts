import { User } from "../../domain/User";

const _serializeSingleUser = (user: User) => {
  return {
    name: user.name,
    age: user.age
  };
};

export class UserSerializer {
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
}
