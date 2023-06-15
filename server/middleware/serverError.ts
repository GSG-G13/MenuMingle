import { CustomError } from '../utils';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from '../utils/enum/';

const serverError = (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { status, message } = err;
  console.log(err, 'server error midlleware');

  return res.status(status || StatusCodes.ServerError).json({
    error: true,
    msg: message || 'server Error',
  });
};

export default serverError;
