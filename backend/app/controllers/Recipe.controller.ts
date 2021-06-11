import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "middlewares/catchAsync.middleware";
import { CreateRecipe } from "models/recipe.model";

const prisma = new PrismaClient();

async function CreateRecipe(req: Request, res: Response, next: NextFunction) {
  const { name, method, creator, ratio, steps, time }: CreateRecipe = req.body;

  const result = await prisma.recipe.create({
    data: {
      name,
      ratio,
      time,
      method: {
        connect: {
          id: method,
        },
      },
      User: {
        connect: {
          id: creator,
        },
      },
      steps: {
        create: steps.map((x) => ({
          title: x.title,
          description: x.description,
          time: x.time,
        })),
      },
    },
  });
  res.send(result);
}

async function GetAllRecipes(req: Request, res: Response) {
  const response = await prisma.recipe.findMany({
    include: {
      steps: true,
    }
  });
  res.send({
    data: response,
  });
}

export default {
  CreateRecipe: catchAsync(CreateRecipe),
  GetAllRecipes,
};
