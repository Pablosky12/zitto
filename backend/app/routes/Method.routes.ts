import { Router } from "express";
import CoffeeController from "controllers/Method.controller";
import { CreateMethodSchema } from "models/method.model";
import { resourceValidatorMiddleware } from "middlewares/resourceValidator.middleware";

export const router = Router();

router.post(
  "/",
  resourceValidatorMiddleware(CreateMethodSchema),
  CoffeeController.CreateMethod
);
router.get("/", CoffeeController.GetAllMethods);
