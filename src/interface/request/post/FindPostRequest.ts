import { TypedRequest } from "../ExpressRequest";

interface Params {
  id: string;
}

export type TFindPostRequest = TypedRequest<Params>;
