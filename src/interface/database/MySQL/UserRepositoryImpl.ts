import { User } from "../../../domain/User";
import { IUserRepository } from "../repository/user/IUserRepository";
import { IDBConnection } from "./IDBConnection";
import { TUpdateUserDTO, TCreateUserDTO } from "../repository/user/DTO";

class UserRepository extends IUserRepository {
  private connection: IDBConnection;

  public constructor(connection: IDBConnection) {
    super();
    this.connection = connection;
  }

  // MEMO: Objそのものをもどすと、_idみたいなjsonが却ってしまうのでここで変換をかます。
  // けどその変換はserializerに任せることにする。
  // TODO: あとで修正
  private convertModel(r: User): User {
    let user = new User();
    user.id = r.id;
    user.name = r.name;
    user.age = r.age;
    return user;
  }

  // TODO: DTOを戻すようにする
  public async find(id: number): Promise<User> {
    let queryResults = await this.connection.execute(
      "select * from Users where id = ? limit 1",
      id
    );
    return this.convertModel(queryResults[0]);
  }

  // TODO: DTOを戻すようにする
  public async findAll(): Promise<User[]> {
    let queryResults: User[] = await this.connection.execute(
      "select * from Users"
    );
    const results = queryResults.map(
      (m): User => {
        return this.convertModel(m);
      }
    );
    return results;
  }

  public async create(createUserDto: TCreateUserDTO): Promise<User> {
    const user = await this.connection.execute(
      `INSERT INTO Users (name, age) VALUES ("${createUserDto.name}", "${
        createUserDto.age
      }")`
    );
    return user;
  }

  public async update(userDTO: TUpdateUserDTO): Promise<User> {
    const result = await this.connection.execute(
      "update Users set name = ?, age = ?",
      [userDTO.name, userDTO.age]
    );
    return result;
  }

  public async delete(id: number): Promise<null> {
    await this.connection.execute("delete from Users where id = ?", id);
    return null;
  }
}

export { UserRepository };
