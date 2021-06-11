import { Router } from 'express'
import {router as CoffeeRouter} from './Coffee.routes'
import {router as MethodRouter} from './Method.routes'
import {router as RecipeRouter} from './Recipe.routes'

const baseRouter = Router();
baseRouter.use('/coffee', CoffeeRouter);
baseRouter.use('/method', MethodRouter);
baseRouter.use('/recipe', RecipeRouter);

export default baseRouter;