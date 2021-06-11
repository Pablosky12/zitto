import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { CreateCoffee } from "models/coffee.model";
import { catchAsync } from "middlewares/catchAsync.middleware";

const prisma = new PrismaClient();

async function CreateCoffee(req: Request, res: Response, next: NextFunction) {
  const { name, origin, toastGrade }: CreateCoffee = req.body;

  const result = await prisma.coffee.create({
    data: {
      name,
      originId: origin,
      toastGrade,
    },
  });
  res.send(result);
}

async function GetAllCoffee(req: Request, res: Response) {
  const response = await prisma.coffee.findMany();
  res.send({
    data: response,
  });
}

export default {
  CreateCoffee: catchAsync(CreateCoffee),
  GetAllCoffee,
};
