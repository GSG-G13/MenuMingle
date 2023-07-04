import { Router } from 'express';
import addToCart from '../controllers/cart/addToCart';
import getInProgress from '../controllers/cart/getInProgress';
import { getOrderStatus } from '../controllers';

const cartRouter = Router();

cartRouter.get('/inprogress', getInProgress);
cartRouter.post('/add-to-cart', addToCart);
cartRouter.get('/get-cart-status', getOrderStatus);

export default cartRouter;
