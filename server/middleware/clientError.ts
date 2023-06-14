import { Request, Response } from 'express';
import { StatusCodes } from '../utils/enum';

const clientError = (req: Request, res: Response) => {
  res.status(StatusCodes.BadRequest).json({
    error: true,
    msg: 'page not found',
  });
};

export default clientError;
