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
// TODO: controllerを集約したい
const UserController_1 = require("../interface/controller/UserController");
const PostController_1 = require("../interface/controller/PostController");
const userController = new UserController_1.UserController();
const postController = new PostController_1.PostController();
const router = express.Router();
// user
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
// post
router.get("/posts", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let results = yield postController.findAllPost(req, res);
    res.send(results);
}));
router.get("/posts/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield postController.findPost(req, res);
    res.send(result);
}));
router.post("/posts", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield postController.createPost(req, res);
    res.send(result);
}));
router.delete("/posts/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result = yield postController.deletePost(req, res);
    res.send(result);
}));
exports.default = router;
//# sourceMappingURL=router.js.map