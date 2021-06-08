import {Router} from 'express'
import CoffeeController from '../controllers/CoffeeController';

export const router = Router();

router.post('/', CoffeeController.CreateCoffee);
router.get('/',CoffeeController.GetAllCoffee);

