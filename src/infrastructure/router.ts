import express = require("express");
import { UserController } from "../interface/controller/UserController";
// import { MysqlConnection } from "./MysqlConnection";
import { TCreateUserRequest } from "../interface/request/user/CreateUserRequest";
import { TFindUserRequest } from "../interface/request/user/FindUserRequest";
import { IUpdateUserRequest } from "../interface/request/user/UpdateUserRequest";
import { TDeleteUserRequest } from "../interface/request/user/DeleteUserRequest";
// const mysqlConnection = new MysqlConnection();
const userController = new UserController();
// const userController = new UserController(mysqlConnection);
const router = express.Router();

router.get("/users", async (req: express.Request, res: express.Response) => {
  let results = await userController.findAllUser(req, res);
  res.send(results);
});

router.get(
  "/users/:id",
  async (req: TFindUserRequest, res: express.Response) => {
    let result = await userController.findUser(req, res);
    res.send(result);
  }
);

router.post(
  "/users",
  async (req: TCreateUserRequest, res: express.Response) => {
    let result = await userController.createUser(req, res);
    res.send(result);
  }
);

router.patch(
  "/users/:id",
  async (req: IUpdateUserRequest, res: express.Response) => {
    let result = await userController.updateUser(req, res);
    res.send(result);
  }
);

router.delete(
  "/users/:id",
  async (req: TDeleteUserRequest, res: express.Response) => {
    let result = await userController.deleteUser(req, res);
    res.send(result);
  }
);

export default router;
