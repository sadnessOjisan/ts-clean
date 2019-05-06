import { Request } from 'express';

interface Params {
  name: string;
  age: number;
}

export interface IUpdateUserRequest extends Request {
  params: {
    id: number;
  };
  body: Params;
}

export class UpdateUserRequest {
  private _name: string;
  private _age: number;

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  constructor(params: Params) {
    this.valid(params);
    this._name = params.name;
    this._age = params.age;
  }

  private valid(params: Params) {
    if (params.name.length < 4) {
      throw new Error('4文字以上の名前');
    }
    if (params.age < 12) {
      throw new Error('登録は12才から');
    }
  }
}
