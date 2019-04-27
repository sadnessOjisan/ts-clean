import express = require("express");
import { UserController } from "../interface/controller/UserController";
// import { MysqlConnection } from "./MysqlConnection";

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
  async (req: express.Request, res: express.Response) => {
    let result = await userController.findUser(req, res);
    res.send(result);
  }
);

export default router;
