import { TypedRequest } from "../ExpressRequest";

type Params = {
  id: number;
};

export type TDeleteUserRequest = TypedRequest<Params>;
