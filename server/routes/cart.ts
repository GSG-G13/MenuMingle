import { Router } from 'express';
import { addToCart, getInProgress, updateCartStatus } from '../controllers';
const cartRouter = Router();

cartRouter.get('/inprogress', getInProgress);
cartRouter.post('/add-to-cart', addToCart);
app.put('/:id/update', updateCartStatus);

export default cartRouter;
