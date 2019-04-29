"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateUserRequest {
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    constructor(params) {
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
exports.UpdateUserRequest = UpdateUserRequest;
//# sourceMappingURL=UpdateUserRequest.js.map