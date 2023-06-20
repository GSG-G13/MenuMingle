import { Router } from 'express';
import {
  createDish,
  getAllDishes,
  deleteDish,
  updateDish,
  getDishById,
} from '../controllers';

import verifyAccessToken from '../middleware/authMiddileware';
import checkAdminAuth from '../middleware/checkAdminAuth';

export const dishesRouter = Router();

dishesRouter.get('/', getAllDishes);
dishesRouter.get('/:id', getDishById);
dishesRouter.post('/create', verifyAccessToken, checkAdminAuth, createDish);
dishesRouter.delete(
  '/delete/:id',
  verifyAccessToken,
  checkAdminAuth,
  deleteDish,
);
dishesRouter.put('/update/:id', verifyAccessToken, checkAdminAuth, updateDish);
