import { TypedRequest } from "../ExpressRequest";

type Params = {
  id: number;
};

export type TFindUserRequest = TypedRequest<Params>;
