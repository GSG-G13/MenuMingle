import { Router } from 'express';
import {
  createDish,
  getAllDishes,
  deleteDish,
  updateDish,
  getDishById,
} from '../controllers';

import verifyAccessToken from '../middleware/authMiddileware';

export const dishesRouter = Router();

dishesRouter.get('/', getAllDishes);
dishesRouter.get('/:id', getDishById);
dishesRouter.post('/create', verifyAccessToken('admin'), createDish);
dishesRouter.delete('/delete/:id', verifyAccessToken('admin'), deleteDish);
dishesRouter.put('/update/:id', verifyAccessToken('admin'), updateDish);
