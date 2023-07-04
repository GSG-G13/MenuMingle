import express, { json, urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import { join } from 'path';

import serverError from './middleware/serverError';
import clientError from './middleware/clientError';
import { router, PaymentRouter } from './routes';

import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();
import { ServerCors } from './utils';

const app = express();

app.use([
  cors({
    origin: ServerCors.Origin as string,
    methods: ServerCors.Methods as string,
    credentials: Boolean(ServerCors.Credentials),
  }),
  json(),
  urlencoded({ extended: false }),
  compression(),
  cookieParser(),
  express.static(join(__dirname, '..', 'client', 'dist')),
]);

app.use('/', PaymentRouter);
app.use('/api/v1', router);
app.use(serverError);
app.use(clientError);

export default app;
