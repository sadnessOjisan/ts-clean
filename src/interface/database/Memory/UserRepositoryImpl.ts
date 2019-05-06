/**
 * repository層ではdtoを受け取ってDBに渡す役割を担う
 */

import DB from "./MemoryDataBase";
import { User } from "../../../domain/User";
import { IUserRepository } from "../repository/user/IUserRepository";
import { TUpdateUserDTO } from "../repository/user/DTO";

class UserRepositoryImpl extends IUserRepository {
  constructor() {
    super();
    const user1 = new User(1, "samle", 3);
    const user2 = new User(2, "samle2", 3);
    DB.users = [user1, user2];
  }

  private convertModel(r: any) {
    let user = new User();
    user.id = r.id;
    user.name = r.name;
    user.age = r.age;
    return user;
  }

  async find(id: number): Promise<User> | null {
    let queryResults = DB.users.filter(user => user.id === id);
    if (queryResults.length === 0) {
      return null;
    }
    return this.convertModel(queryResults[0]);
  }

  async findAll(): Promise<Array<User>> {
    let queryResults = DB.users;
    const results = queryResults.map((m: any) => {
      return this.convertModel(m);
    });

    return results;
  }

  async create(user: User): Promise<User> {
    const userIds = DB.users.map(user => user.id);
    const maxId: number = Math.max.apply(null, userIds);
    const newId = maxId + 1;
    const newUser = new User(newId, user.name, user.age);
    DB.users.push(newUser);
    return newUser;
  }

  async update(userDTO: TUpdateUserDTO): Promise<User> {
    let returnUser;

    DB.users = DB.users.map(tu => {
      if (tu.id === userDTO.id) {
        let name;
        let age;
        if (userDTO.name) {
          name = userDTO.name;
        } else {
          name = tu.name;
        }
        if (userDTO.age) {
          age = userDTO.age;
        } else {
          age = tu.age;
        }
        const user = new User(userDTO.id, name, age);
        returnUser = user;
        return user;
      } else {
        returnUser = tu;
        return tu;
      }
    });
    return returnUser;
  }

  async delete(id: number): Promise<null> {
    DB.users = DB.users.filter(user => {
      return user.id !== id;
    });
    return null;
  }
}

export { UserRepositoryImpl as UserRepository };
