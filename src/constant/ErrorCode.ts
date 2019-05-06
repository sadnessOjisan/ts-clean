const UNAUTHORISED = "ERROR/UNAUTHORISED";
const INVALID_VALUE = "ERROR/INVALID_VALUE";

const ErrorType = { UNAUTHORISED, INVALID_VALUE };

const SUCCESS_CODE: "0000" = "0000";
const INVALID_CODE: "4000" = "4000";
const EXCEPTION_CODE: "5000" = "5000";
const UNDEFINED_CODE: "9000" = "9000";

const StatusCode = {
  success: SUCCESS_CODE,
  invalid: INVALID_CODE,
  exception: EXCEPTION_CODE,
  undefined: UNDEFINED_CODE
};

interface TException {
  code:
    | typeof StatusCode.invalid
    | typeof StatusCode.exception
    | typeof StatusCode.undefined;
  message: string;
}

export { ErrorType, TException, StatusCode };
