import { TypedRequest } from "../ExpressRequest";

interface Params {
  id: number;
}

export type TDeletePostRequest = TypedRequest<Params>;
