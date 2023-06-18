import express, { json, urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';

import serverError from './middleware/serverError';
import clientError from './middleware/clientError';
import router from './routes';

const app = express();

app.use([
  cors(),
  json(),
  urlencoded({ extended: false }),
  compression(),
  cookieParser(),
]);

app.use('/api/v1', router);
app.use(serverError);
app.use(clientError);

export default app;
