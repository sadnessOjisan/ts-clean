"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toUpdateUserDTO = (user) => {
    return { id: user.id, name: user.name, age: user.age };
};
exports.toUpdateUserDTO = toUpdateUserDTO;
const toCreateUserDTO = (user) => {
    return { name: user.name, age: user.age };
};
exports.toCreateUserDTO = toCreateUserDTO;
//# sourceMappingURL=DTO.js.map