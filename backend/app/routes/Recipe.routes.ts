import { Router } from "express";
import RecipeController from "controllers/Recipe.controller";
import { resourceValidatorMiddleware } from "middlewares/resourceValidator.middleware";
import { CreateRecipeSchema } from "models/recipe.model";

export const router = Router();

router.post(
  "/",
  resourceValidatorMiddleware(CreateRecipeSchema),
  RecipeController.CreateRecipe
);
router.get("/", RecipeController.GetAllRecipes);
