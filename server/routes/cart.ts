import { Router } from 'express';
import addToCart from '../controllers/cart/addToCart';
import getInProgress from '../controllers/cart/getInProgress';
import getDishesByCartId from '../controllers/cart/getDishesById';
const cartRouter = Router();

cartRouter.get('/inprogress', getInProgress);
cartRouter.post('/add-to-cart', addToCart);
cartRouter.get('/:cartId/dishes', getDishesByCartId);
export default cartRouter;
