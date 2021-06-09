import express, { NextFunction, Request, Response } from "express";
import { AppError } from "utils/AppError";
import routes from "./routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(Number(error.statusCode || 500)).json({
      message: error.message,
      errors: error.errors,
    });
  }
});
app.listen(port, () => {
  console.log("lessgo");
});
