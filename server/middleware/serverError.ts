/* eslint-disable @typescript-eslint/no-unused-vars */
import { ValidationError } from 'joi';
import { JsonWebTokenError } from 'jsonwebtoken';
import { CustomError } from '../utils';
import { NextFunction, Request, Response } from 'express';

const serverError = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ValidationError) {
    return res.status(400).json({
      status: 401,
      data: {
        message: 'invalid inputs data!',
      },
    });
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({
      status: 401,
      data: {
        message: 'UnAuthorize',
      },
    });
  }
  if (err instanceof CustomError) {
    return res.status(400).json({
      status: 400,
      data: {
        message: err.message,
      },
    });
  }

  res.status(500).json({
    error: true,
    message: err,
  });
};

export default serverError;
