import { Router } from "express";
import { resourceValidatorMiddleware } from "middlewares/resourceValidator.middleware";
import { CreateBrewSchema } from "models/brew.model";
import BrewController from "controllers/Brew.controller";

export const router = Router();

router.post(
  "/",
  resourceValidatorMiddleware(CreateBrewSchema),
  BrewController.CreateBrew
);
router.get("/", BrewController.GetAllBrews);
