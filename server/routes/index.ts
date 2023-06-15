import { Router } from 'express';
import { dishesRouter } from './dishes';

export const router: Router = Router();

router.use('/dishes', dishesRouter);
