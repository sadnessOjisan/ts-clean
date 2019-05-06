import { TypedRequest } from "../ExpressRequest";
import { StatusCode } from "../../../constant/ErrorCode";

interface Params {
  id: string;
}

export class FindUserRequest {
  private _id: number;

  public get id(): number {
    return this._id;
  }

  public constructor(params: Params) {
    const validId = this.validRequest(params);
    this._id = validId;
  }

  private validRequest(params: Params): number {
    console.log(params);
    const id = params.id;
    const numberId = Number(id);
    if (typeof numberId !== "number") {
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
