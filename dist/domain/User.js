"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    constructor(name = null, age = null, id = null) {
        this._name = name;
        this._age = age;
        this._id = id;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map