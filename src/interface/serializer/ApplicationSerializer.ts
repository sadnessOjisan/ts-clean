import moment from 'moment';
import { TException, StatusCode } from '../../constant/ErrorCode';

class ApplicationSerializer {
  error(error: Error): TResponse<{}> {
    try {
      const err: TException = JSON.parse(error.message);
      return {
        code: err.code,
        errorName: error.name,
        message: err.message,
        responsed_at: moment().format()
      };
    } catch {
      return {
        code: StatusCode.exception,
        errorName: error.name,
        message: 'err obj parse error',
        responsed_at: moment().format()
      };
    }
  }
}

type TResponse<T> =
  | {
      code: typeof StatusCode.success;
      data: T;
      responsed_at: string;
    }
  | {
      code:
        | typeof StatusCode.invalid
        | typeof StatusCode.exception
        | typeof StatusCode.undefined;
      errorName?: string;
      message: string;
      responsed_at: string;
    };

export { ApplicationSerializer, TResponse, StatusCode };
