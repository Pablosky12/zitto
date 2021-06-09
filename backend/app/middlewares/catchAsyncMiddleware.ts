import { NextFunction, Request, Response } from "express";

export const catchAsync = (fn: (..._:any) => Promise<any>) => {
  return (req:Request, res:Response, next:NextFunction) => {
    console.log(next);
    fn(req, res, next).catch(next);
  };
};
