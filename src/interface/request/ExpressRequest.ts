import { Request } from 'express';

interface TypedRequest<T> extends Request {
  params: T;
}

interface TypedRequestBody<T> extends Request {
  body: T;
}

export { TypedRequest, TypedRequestBody };
