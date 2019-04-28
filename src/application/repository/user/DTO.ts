import { User } from "../../../domain/User";

type TUpdateUserDTO = {
  id: number;
  name?: string;
  age?: number;
};

type TCreateUserDTO = { name: string; age: number };

const toUpdateUserDTO = (user: TUpdateUserDTO) => {
  return { ...user };
};

const toCreateUserDTO = (user: User): TCreateUserDTO => {
  return { name: user.name, age: user.age };
};

export { TUpdateUserDTO, TCreateUserDTO, toUpdateUserDTO, toCreateUserDTO };
