import { Router } from 'express';
import {
  addToCart,
  getInProgress,
  updateCartStatus,
  getDishesByCartId,
} from '../controllers';
const cartRouter = Router();

cartRouter.get('/inprogress', getInProgress);
cartRouter.post('/add-to-cart', addToCart);
cartRouter.put('/:id/update', updateCartStatus);

cartRouter.get('/:cartId/dishes', getDishesByCartId);
export default cartRouter;
