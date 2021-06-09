import { Router } from 'express'
import {router} from './Coffee.routes'

const baseRouter = Router();
baseRouter.use('/coffee', router);

export default baseRouter;