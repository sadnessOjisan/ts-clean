class Post {
  private _id: number;
  private _content: string;
  private _userId: number;

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get content(): string {
    return this._content;
  }

  public set content(content: string) {
    this._content = content;
  }

  public get userId(): number {
    return this._userId;
  }

  public set userId(userId: number) {
    this._userId = userId;
  }

  public constructor(
    id: number = null,
    content: string = null,
    userId: number = null
  ) {
    this._id = id;
    this._content = content;
    this._userId = userId;
  }
}

const PostBusinessRule = {
  isPostLengthValid(postText: string): boolean {
    return postText.length > 0 && postText.length < 255;
  }
};

export { Post, PostBusinessRule };
