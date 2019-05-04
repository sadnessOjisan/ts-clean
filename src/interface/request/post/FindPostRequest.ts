import { TypedRequest } from "../ExpressRequest";

type Params = {
  id: string;
};

export type TFindPostRequest = TypedRequest<Params>;
