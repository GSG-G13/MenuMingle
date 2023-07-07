import express, { json, urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import { join } from 'path';

import serverError from './middleware/serverError';
import clientError from './middleware/clientError';
import { router, PaymentRouter } from './routes';

import dotenv from 'dotenv';
dotenv.config();
// import { ServerCors } from './utils';

const app = express();

// app.use([
//   json(),
//   urlencoded({ extended: false }),
//   compression(),
//   cookieParser(),
// ]);
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());

// app.get(/^(?!\/api).*/, (req, res) => {
//   res.sendFile(join(__dirname, '..', 'client', 'dist', 'index.html'));
// });
app.use('/', PaymentRouter);
app.use('/api/v1', router);
app.use(express.static(join(__dirname, '..', 'client', 'dist')));

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.use(serverError);
app.use(clientError);

export default app;
