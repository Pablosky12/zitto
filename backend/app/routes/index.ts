import { Router } from 'express'
import {router as CoffeeRouter} from './Coffee.routes'
import {router as MethodRouter} from './Method.routes'

const baseRouter = Router();
baseRouter.use('/coffee', CoffeeRouter);
baseRouter.use('/method', MethodRouter);

export default baseRouter;