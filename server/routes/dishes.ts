import { Router } from 'express';
import {
  createDish,
  getAllDishes,
  deleteDish,
  updateDish,
} from '../controllers';

export const dishesRouter = Router();

dishesRouter.get('/', getAllDishes);
dishesRouter.post('/create', createDish);
dishesRouter.delete('/delete/:id', deleteDish);
dishesRouter.put('/update/:id', updateDish);
