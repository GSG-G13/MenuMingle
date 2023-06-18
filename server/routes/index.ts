import { Router } from 'express';
import { dishesRouter } from './dishes';

import authRouter from './auth';

const router = Router();

router.use('/dishes', dishesRouter);
router.use('/auth', authRouter);

export default router;
