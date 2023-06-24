import { Router } from 'express';
import addToCart from '../controllers/cart/addToCart';
const cartRouter = Router();
cartRouter.post('/add-to-cart', addToCart);
export default cartRouter;
