import { Router } from 'express';
import { dishesRouter } from './dishes';

import authRouter from './auth';
import cartRouter from './cart';

const router = Router();

router.use('/dishes', dishesRouter);
router.use('/auth', authRouter);
router.use('/cart', cartRouter);

export default router;
