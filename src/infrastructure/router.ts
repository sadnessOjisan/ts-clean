import express from "express";
// TODO: controllerを集約したい
import { UserController } from "../interface/controller/UserController";
import { PostController } from "../interface/controller/PostController";
import { TCreateUserRequest } from "../interface/request/user/CreateUserRequest";
import { TFindUserRequest } from "../interface/request/user/FindUserRequest";
import { IUpdateUserRequest } from "../interface/request/user/UpdateUserRequest";
import { TDeleteUserRequest } from "../interface/request/user/DeleteUserRequest";
import { TFindPostRequest } from "../interface/request/post/FindPostRequest";
import { TCreatePostRequest } from "../interface/request/post/CreatePostRequest";
import { TDeletePostRequest } from "../interface/request/post/DeletePostRequest";
import { MysqlConnection } from "../infrastructure/MysqlConnection";

const con = new MysqlConnection();
const userController = new UserController(con);
const postController = new PostController(con);
const router = express.Router();

// user
router.get("/users", async (_, res: express.Response) => {
  let results = await userController.findAllUser();
  res.send(results);
});

router.get(
  "/users/:id",
  async (req: TFindUserRequest, res: express.Response) => {
    let result = await userController.findUser(req);
    res.send(result);
  }
);

router.post(
  "/users",
  async (req: TCreateUserRequest, res: express.Response) => {
    let result = await userController.createUser(req);
    res.send(result);
  }
);

router.patch(
  "/users/:id",
  async (req: IUpdateUserRequest, res: express.Response) => {
    let result = await userController.updateUser(req);
    res.send(result);
  }
);

router.delete(
  "/users/:id",
  async (req: TDeleteUserRequest, res: express.Response) => {
    let result = await userController.deleteUser(req);
    res.send(result);
  }
);

// post
router.get("/posts", async (_, res: express.Response) => {
  let results = await postController.findAllPost();
  res.send(results);
});

router.get(
  "/posts/:id",
  async (req: TFindPostRequest, res: express.Response) => {
    let result = await postController.findPost(req);
    res.send(result);
  }
);

router.post(
  "/posts",
  async (req: TCreatePostRequest, res: express.Response) => {
    let result = await postController.createPost(req);
    res.send(result);
  }
);

router.delete(
  "/posts/:id",
  async (req: TDeletePostRequest, res: express.Response) => {
    let result = await postController.deletePost(req);
    res.send(result);
  }
);

export default router;
