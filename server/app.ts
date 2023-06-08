import express, { Request, Response } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

export const app = express();

app.use(compression());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

app.set('port', process.env.PORT || 8080);

app.get('/echo', (_req: Request, res: Response) => {
  return res.json({ msg: 'success' });
});