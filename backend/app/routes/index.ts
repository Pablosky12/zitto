import { Router } from 'express'
import {router as CoffeeRouter} from './Coffee.routes'
import {router as MethodRouter} from './Method.routes'
import {router as RecipeRouter} from './Recipe.routes'
import {router as BrewRouter} from './Brew.routes'

const baseRouter = Router();
baseRouter.use('/coffee', CoffeeRouter);
baseRouter.use('/method', MethodRouter);
baseRouter.use('/recipe', RecipeRouter);
baseRouter.use('/brew', BrewRouter);

export default baseRouter;