import { TypedRequest } from "../ExpressRequest";

interface Params {
  id: number;
}

export type TDeleteUserRequest = TypedRequest<Params>;
