import { User } from "../../../domain/User";
import { IUserRepository } from "../../../application/repository/user/IUserRepository";
import { IDBConnection } from "./IDBConnection";

class UserRepository extends IUserRepository {
  private connection: any;

  constructor(connection: IDBConnection) {
    super();
    this.connection = connection;
  }

  private convertModel(r: any) {
    let user = new User();
    user.name = r.name;
    user.age = r.age;
    return user;
  }

  async find(id: number): Promise<User> {
    let queryResults = await this.connection.execute(
      "select * from users where id = ? limit 1",
      id
    );
    return this.convertModel(queryResults[0]);
  }

  async findAll(): Promise<Array<User>> {
    let queryResults = await this.connection.execute("select * from Users");
    const results = queryResults.map((m: any) => {
      return this.convertModel(m);
    });

    return results;
  }
}

export { UserRepository };
