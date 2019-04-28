import { Request } from "express";

interface TypedRequest<T> extends Request {
  params: T;
}

export { TypedRequest };
