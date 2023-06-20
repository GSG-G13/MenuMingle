import { NextFunction, Request, Response } from 'express';
import { CustomError, Payload } from '../utils';
import { StatusCodes } from '../utils/enum';

const checkCookerAuth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { role } = req.user as Payload;
    if (role !== 'cooker') {
      throw new CustomError(StatusCodes.Unauthorized, 'Unauthorized');
    }

    next();
  } catch (err) {
    next(err);
  }
};

export default checkCookerAuth;
