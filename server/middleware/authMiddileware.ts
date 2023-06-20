import { Response, NextFunction } from 'express';
import { verifyToken } from '../utils/helper';
import { CustomError, Payload } from '../utils';
import { StatusCodes, CustomRequest } from '../utils';

const verifyAccessToken = (role: string) => {
  return async (req: CustomRequest, _res: Response, next: NextFunction) => {
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
      if (req.user.role === role) {
        next();
      }
      throw new CustomError(StatusCodes.Unauthenticated, 'unauthenticated');
    } catch (err) {
      next(err);
    }
  };
};

export default verifyAccessToken;
