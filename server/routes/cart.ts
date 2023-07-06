import { Router } from 'express';
import {
  addToCart,
  getInProgress,
  updateCartStatus,
  getDishesByCartId,
} from '../controllers';
import { getOrderStatus } from '../controllers';
import verifyAccessToken from '../middleware/authMiddileware';

const cartRouter = Router();

cartRouter.get('/inprogress', verifyAccessToken('cooker'), getInProgress);
cartRouter.post('/add-to-cart', addToCart);
cartRouter.get('/get-cart-status', verifyAccessToken('cooker'), getOrderStatus);
cartRouter.put('/:id/update', verifyAccessToken('cooker'), updateCartStatus);

cartRouter.get(
  '/:cartId/dishes',
  verifyAccessToken('cooker'),
  getDishesByCartId,
);
export default cartRouter;
