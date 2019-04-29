import { TypedRequest } from "../ExpressRequest";

type Params = {
  id: number;
};

export type TFindPostRequest = TypedRequest<Params>;
