import { Router } from 'express';
import addToCart from '../controllers/cart/addToCart';
import getInProgress from '../controllers/cart/getInProgress';

const cartRouter = Router();

cartRouter.get('/inprogress', getInProgress);
cartRouter.post('/add-to-cart', addToCart);

export default cartRouter;
