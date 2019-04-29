"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const UserController_1 = require("../interface/controller/UserController");
// const mysqlConnection = new MysqlConnection();
const userController = new UserController_1.UserController();
// const userController = new UserController(mysqlConnection);
const router = express.Router();
router.get("/users", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let results = yield userController.findAllUser(req, res);
    res.send(results);
}));
router.get("/users/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield userController.findUser(req, res);
    res.send(result);
}));
router.post("/users", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield userController.createUser(req, res);
    res.send(result);
}));
router.patch("/users/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield userController.updateUser(req, res);
    res.send(result);
}));
router.delete("/users/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield userController.deleteUser(req, res);
    res.send(result);
}));
exports.default = router;
//# sourceMappingURL=router.js.map