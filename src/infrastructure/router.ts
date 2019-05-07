import express from "express";
import Controller from "../interface/controller";
import { TCreateUserRequest } from "../interface/request/user/CreateUserRequest";
import { TFindUserRequest } from "../interface/request/user/FindUserRequest";
import { UpdateUserRequest } from "../interface/request/user/UpdateUserRequest";
import { TDeleteUserRequest } from "../interface/request/user/DeleteUserRequest";
import { TFindPostRequest } from "../interface/request/post/FindPostRequest";
import { TCreatePostRequest } from "../interface/request/post/CreatePostRequest";
import { TDeletePostRequest } from "../interface/request/post/DeletePostRequest";

const userController = new Controller.UserController();
const postController = new Controller.PostController();
const router = express.Router();

// user
router.get(
  "/users",
  async (_, res: express.Response): Promise<void> => {
    let results = await userController.findAllUser();
    res.send(results);
  }
);

router.get(
  "/users/:id",
  async (req: TFindUserRequest, res: express.Response): Promise<void> => {
    let result = await userController.findUser(req);
    res.send(result);
  }
);

router.post(
  "/users",
  async (req: TCreateUserRequest, res: express.Response): Promise<void> => {
    let result = await userController.createUser(req);
    res.send(result);
  }
);

router.patch(
  "/users/:id",
  async (req: UpdateUserRequest, res: express.Response): Promise<void> => {
    let result = await userController.updateUser(req);
    res.send(result);
  }
);

router.delete(
  "/users/:id",
  async (req: TDeleteUserRequest, res: express.Response): Promise<void> => {
    let result = await userController.deleteUser(req);
    res.send(result);
  }
);

// post
router.get(
  "/posts",
  async (_, res: express.Response): Promise<void> => {
    let results = await postController.findAllPost();
    res.send(results);
  }
);

router.get(
  "/posts/:id",
  async (req: TFindPostRequest, res: express.Response): Promise<void> => {
    let result = await postController.findPost(req);
    res.send(result);
  }
);

router.post(
  "/posts",
  async (req: TCreatePostRequest, res: express.Response): Promise<void> => {
    let result = await postController.createPost(req);
    res.send(result);
  }
);

router.delete(
  "/posts/:id",
  async (req: TDeletePostRequest, res: express.Response): Promise<void> => {
    let result = await postController.deletePost(req);
    res.send(result);
  }
);

export default router;
