import { NextFunction, Request, Response } from "express";
import { AppError } from "utils/AppError";
import { BaseSchema, ValidationError, } from "yup";

export const resourceValidatorMiddleware =
  (resourceSchema: BaseSchema , type: "body" | "params" = "body") =>
  async (req: Request, res: Response, next: NextFunction) => {
    const resource = req[type];

    try {
      await resourceSchema.validate(resource, {
        abortEarly: false,
        strict: true,
      });
      next();
    } catch (err) {
      next(
        new AppError("Validation error", 400, (err as ValidationError).errors)
      );
    }
  };
