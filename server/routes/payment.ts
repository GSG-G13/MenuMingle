import { Router } from 'express';
import { getConfig, paymentIntent } from '../controllers';

const paymentRouter = Router();

paymentRouter.get('/config', getConfig);
paymentRouter.post('/create-payment-intent', paymentIntent);

export default paymentRouter;
