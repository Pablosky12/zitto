export class AppError extends Error {
  statusCode: Number;
  status: string;
  isOperational: boolean;
  errors: string[];
  constructor(message: string, statusCode: Number = 500, errors: string[]) {
    super(message.concat(",").toString());

    this.errors = errors;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
