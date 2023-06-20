import e, { Response, Request, NextFunction } from 'express';
import { verifyToken } from '../utils/helper';
import { CustomError, Payload } from '../utils';
import { StatusCodes } from '../utils/enum';
import { CustomRequest } from '../utils';

const verifyAccessToken = async (
  req: any,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new CustomError(StatusCodes.Unauthenticated, 'unauthenticated');
    }

    const user = await verifyToken(token);

    if (!user) {
      throw new CustomError(StatusCodes.Unauthenticated, 'unauthenticated');
    }

    req.user = user as Payload;
    next();
  } catch (err) {
    next(err);
  }
};

export default verifyAccessToken;
