import { Router } from "express";
import CoffeeController from "controllers/CoffeeController";
import { CreateCoffeeSchema } from "models/coffee.model";
import { resourceValidatorMiddleware } from "middlewares/resourceValidator.middleware";

export const router = Router();

router.post(
  "/",
  resourceValidatorMiddleware(CreateCoffeeSchema),
  CoffeeController.CreateCoffee
);
router.get("/", CoffeeController.GetAllCoffee);
