import { TypedRequest } from "../ExpressRequest";
import { StatusCode } from "../../../constant/ErrorCode";

type Params = {
  id: string;
};

export class FindUserRequest {
  private _id: number;

  get id(): number {
    return this._id;
  }

  constructor(params: Params) {
    const validId = this.validRequest(params);
    this._id = validId;
  }

  private validRequest(params: Params) {
    const id = params.id;
    const numberId = Number(id);
    if (typeof numberId === "number") {
      throw new Error(
        JSON.stringify({
          code: StatusCode.invalid,
          message: "不正なrequest idです"
        })
      );
    }
    return numberId;
  }
}

export type TFindUserRequest = TypedRequest<Params>;
