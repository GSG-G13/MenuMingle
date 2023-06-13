/* eslint-disable @typescript-eslint/no-unused-vars */
import { ValidationError } from 'joi';
import { JsonWebTokenError } from 'jsonwebtoken';
import { CustomError } from '../utils';
import { NextFunction, Request, Response } from 'express';

const serverError = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { status, message } = err;

  return res.status(status).json({
    error: true,
    msg: message,
  });
};

export default serverError;
