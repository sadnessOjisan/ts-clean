import { TypedRequestBody } from "../ExpressRequest";
import { PostBusinessRule } from "../../../domain/Post";

interface Params {
  content: string;
  userId: number;
}

export type TCreatePostRequest = TypedRequestBody<Params>;

export class CreatePostRequest {
  private _content: string;
  private _userId: number;

  get content(): string {
    return this._content;
  }

  get userId(): number {
    return this._userId;
  }

  constructor(params: Params) {
    this.valid(params);
    this._content = params.content;
    this._userId = params.userId;
  }

  private valid(params: Params) {
    if (!PostBusinessRule.isPostLengthValid(params.content)) {
      throw new Error("1以上255以下の文字数でおねがいします");
    }
  }
}
