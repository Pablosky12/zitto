import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { CreateMethod } from "models/method.model";
import { catchAsync } from "middlewares/catchAsync.middleware";

const prisma = new PrismaClient();

async function CreateMethod(req: Request, res: Response, next: NextFunction) {
  const { name }: CreateMethod = req.body;

  const result = await prisma.method.create({
    data: {
      name
    },
  });
  res.send(result);
}

async function GetAllMethods(req: Request, res: Response) {
  const response = await prisma.method.findMany();
  res.send({
    data: response,
  });
}

export default {
  CreateMethod: catchAsync(CreateMethod),
  GetAllMethods,
};
