import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { CreateBrew } from "models/brew.model";
import { catchAsync } from "middlewares/catchAsync.middleware";

const prisma = new PrismaClient();

async function CreateBrew(req: Request, res: Response, next: NextFunction) {
  const { coffee, date, recipe }: CreateBrew = req.body;

  const result = await prisma.brew.create({
    data: {
      date: new Date(date),
      coffee: {
        connect: {
          id: coffee,
        },
      },
      recipe: {
        connect: {
          id: recipe,
        },
      },
    },
  });
  res.send(result);
}

async function GetAllBrews(req: Request, res: Response) {
  const response = await prisma.brew.findMany();
  res.send({
    data: response,
  });
}

export default {
  CreateBrew: catchAsync(CreateBrew),
  GetAllBrews,
};
