class Post {
  private _id: number;
  private _content: string;
  private _userId: number;

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get content(): string {
    return this._content;
  }

  set content(content: string) {
    this._content = content;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(userId: number) {
    this._userId = userId;
  }

  constructor(
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
