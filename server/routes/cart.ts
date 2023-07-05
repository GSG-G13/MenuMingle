import { Router } from 'express';
import {
  addToCart,
  getInProgress,
  updateCartStatus,
  getDishesByCartId,
} from '../controllers';
import { getOrderStatus } from '../controllers';

const cartRouter = Router();

cartRouter.get('/inprogress', getInProgress);
cartRouter.post('/add-to-cart', addToCart);
cartRouter.get('/get-cart-status', getOrderStatus);
cartRouter.put('/update-cart', updateCartStatus);
cartRouter.get('/:cartId/dishes', getDishesByCartId);

export default cartRouter;
