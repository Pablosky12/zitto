import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CreateCoffee, CreateCoffeeSchema } from "../models/coffee.model";

const prisma = new PrismaClient();

function CreateCoffee(req: Request, res: Response) {
  const reqBody:CreateCoffee = req.body;
  const isValid = CreateCoffeeSchema.validate(reqBody, {abortEarly: false});
  console.log(isValid.error);
  // try {
  //     prisma.coffee.create({
  //         data: {

  //         }
  //     })
  // }
  res.send();
}

async function GetAllCoffee(req: Request, res: Response) {
  const response = await prisma.coffee.findMany();
  res.send({
      data: response
  });
}

export default {
  CreateCoffee,
  GetAllCoffee,
};
