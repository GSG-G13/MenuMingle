import express, { json, urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';

import serverError from './middleware/serverError';
import clientError from './middleware/clientError';
import { router, PaymentRouter } from './routes';

import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use([
  cors(),
  json(),
  urlencoded({ extended: false }),
  compression(),
  cookieParser(),
]);

app.use('/', PaymentRouter);
app.use('/api/v1', router);
app.use(serverError);
app.use(clientError);

export default app;
