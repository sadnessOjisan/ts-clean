"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationSerializer_1 = require("./ApplicationSerializer");
const _serializeSingleUser = (user) => {
    return {
        id: user.id,
        name: user.name,
        age: user.age
    };
};
class UserSerializer extends ApplicationSerializer_1.ApplicationSerializer {
    user(data) {
        if (!data) {
            throw new Error("expect data to be not undefined nor null");
        }
        return _serializeSingleUser(data);
    }
    users(data) {
        if (!data) {
            throw new Error("expect data to be not undefined nor null");
        }
        return data.map(d => _serializeSingleUser(d));
    }
    delete() {
        return {};
    }
}
exports.UserSerializer = UserSerializer;
//# sourceMappingURL=UserSerializer.js.map