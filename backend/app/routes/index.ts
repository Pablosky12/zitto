import { Router } from 'express'
import {router} from './Coffee.routes'

const baseRouter = Router();
console.log('here')
baseRouter.use('/coffee', router);

export default baseRouter;