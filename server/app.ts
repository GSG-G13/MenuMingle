import express, { Express, json, urlencoded } from 'express';
import cors from 'cors';
import serverError from './middleware/serverError';
import clientError from './middleware/clientError';

import cookieParser from 'cookie-parser';
import compression from 'compression';

import { router } from './routes/index';
import { userRouter } from './routes/staff';

const app: Express = express();

app.use([
  cors(),
  json(),
  urlencoded({ extended: false }),
  compression(),
  cookieParser(),
]);

app.use('/api/v1', router);
app.use('/api/v1/', userRouter);

app.use(serverError);
app.use(clientError);

export default app;
