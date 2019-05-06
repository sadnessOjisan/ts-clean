import { User } from "../../../../domain/User";

type TUpdateUserDTO = {
  id: number;
  name?: string;
  age?: number;
};

type TCreateUserDTO = { name: string; age: number };

const toUpdateUserDTO = (user: TUpdateUserDTO) => {
  return { id: user.id, name: user.name, age: user.age };
};

const toCreateUserDTO = (user: User): TCreateUserDTO => {
  return { name: user.name, age: user.age };
};

export { TUpdateUserDTO, TCreateUserDTO, toUpdateUserDTO, toCreateUserDTO };