import { Router } from 'express';
import {
  createDish,
  getAllDishes,
  deleteDish,
  updateDish,
  getDishById,
} from '../controllers';

export const dishesRouter = Router();

dishesRouter.get('/api/dishes', getAllDishes);
dishesRouter.get('/:id', getDishById);
dishesRouter.post('/create', createDish);
dishesRouter.delete('/delete/:id', deleteDish);
dishesRouter.put('/update/:id', updateDish);
