import { Router } from 'express';
import { getOrderStatus } from '../controllers';

import { addToCart, getInProgress, updateCartStatus } from '../controllers';
const cartRouter = Router();

cartRouter.get('/inprogress', getInProgress);
cartRouter.post('/add-to-cart', addToCart);
cartRouter.get('/get-cart-status', getOrderStatus);
cartRouter.put('/:id/update', updateCartStatus);

export default cartRouter;
