import express, { Express, json, urlencoded } from 'express';
import cors from 'cors';

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

export default app;
