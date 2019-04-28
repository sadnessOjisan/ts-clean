class User {
  private _id: number; // Q: idってnullでもいいかな？
  private _name: string;
  private _age: number;

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  constructor(id: number = null, name: string = null, age: number = null) {
    this._name = name;
    this._age = age;
    this._id = id;
  }
}

export { User };
