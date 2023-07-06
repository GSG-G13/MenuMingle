import { Router } from 'express';
import {
  addToCart,
  getInProgress,
  updateCartStatus,
  getDishesByCartId,
  getCartStatus,
} from '../controllers';

const cartRouter = Router();

cartRouter.get('/inprogress', getInProgress);
cartRouter.post('/add-to-cart', addToCart);
cartRouter.get('/get-cart-status', getCartStatus);
cartRouter.put('/update-cart', updateCartStatus);
cartRouter.get('/:cartId/dishes', getDishesByCartId);

export default cartRouter;
