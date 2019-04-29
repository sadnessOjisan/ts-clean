"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUserRequest {
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    constructor(params) {
        console.log(params);
        this.valid(params);
        this._name = params.name;
        this._age = params.age;
    }
    valid(params) {
        if (params.name.length < 4) {
            throw new Error("4文字以上の名前");
        }
        if (params.age < 12) {
            throw new Error("登録は12才から");
        }
    }
}
exports.CreateUserRequest = CreateUserRequest;
//# sourceMappingURL=CreateUserRequest.js.map