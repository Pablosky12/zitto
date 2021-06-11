import { Router } from "express";
import MethodController from "controllers/Method.controller";
import { CreateMethodSchema } from "models/method.model";
import { resourceValidatorMiddleware } from "middlewares/resourceValidator.middleware";

export const router = Router();

router.post(
  "/",
  resourceValidatorMiddleware(CreateMethodSchema),
  MethodController.CreateMethod
);
router.get("/", MethodController.GetAllMethods);
