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

  public get content(): string {
    return this._content;
  }

  public get userId(): number {
    return this._userId;
  }

  public constructor(params: Params) {
    this.valid(params);
    this._content = params.content;
    this._userId = params.userId;
  }

  private valid(params: Params): void {
    if (!PostBusinessRule.isPostLengthValid(params.content)) {
      throw new Error("1以上255以下の文字数でおねがいします");
    }
  }
}
