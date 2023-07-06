import { Router } from 'express';
import {
  addToCart,
  getInProgress,
  updateCartStatus,
  getDishesByCartId,
  getCartStatus,
} from '../controllers';

import verifyAccessToken from '../middleware/authMiddileware';

const cartRouter = Router();

cartRouter.post('/add-to-cart', addToCart);
cartRouter.put('/update-cart', verifyAccessToken('cooker'), updateCartStatus);
cartRouter.get('/inprogress', verifyAccessToken('cooker'), getInProgress);
cartRouter.get('/get-cart-status', getCartStatus);

cartRouter.get(
  '/:cartId/dishes',
  verifyAccessToken('cooker'),
  getDishesByCartId,
);
export default cartRouter;
