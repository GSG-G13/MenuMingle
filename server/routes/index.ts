import { Router } from 'express';
import { dishesRouter } from './dishes';

import authRouter from './auth';
import cartRouter from './cart';

import paymentRouter from './payment';

const router = Router();
const PaymentRouter = Router();

router.use('/dishes', dishesRouter);
router.use('/auth', authRouter);
router.use('/cart', cartRouter);
PaymentRouter.use('/', paymentRouter);

export { router, PaymentRouter };
