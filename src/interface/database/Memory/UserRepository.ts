import { User } from "../../../domain/User";
import { IUserRepository } from "../../../application/repository/user/IUserRepository";
import { resolve } from "path";
import { rejects } from "assert";

class UserRepository extends IUserRepository {
  private users: User[];

  constructor() {
    super();
    const user1 = new User("samle", 3, 1);
    const user2 = new User("samle2", 3, 3);
    this.users = [user1, user2];
  }

  private convertModel(r: any) {
    let user = new User();
    user.name = r.name;
    user.age = r.age;
    return user;
  }

  async find(id: number): Promise<User> | null {
    let queryResults = this.users.filter(user => user.id === id);
    if (queryResults.length === 0) {
      return null;
    }
    return this.convertModel(queryResults[0]);
  }

  async findAll(): Promise<Array<User>> {
    let queryResults = this.users;
    console.log("queryResults:", queryResults);
    const results = queryResults.map((m: any) => {
      return this.convertModel(m);
    });

    return results;
  }
}

export { UserRepository };
