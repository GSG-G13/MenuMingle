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

      const user = (await verifyToken(token)) as Payload;

      if (!user) {
        throw new CustomError(StatusCodes.Unauthenticated, 'unauthenticated');
      }

      req.user = user as Payload;

      if (user.role === role) {
        return next();
      }
      throw new CustomError(StatusCodes.Unauthorized, 'Unauthorized');
    } catch (err) {
      return next(err);
    }
  };
};

export default verifyAccessToken;
