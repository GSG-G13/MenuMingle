import { Request, Response, NextFunction } from 'express';
import { Cart } from '../../models';
import { CustomError, StatusCodes } from '../../utils';

const getCartStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { cartId } = req.query as { cartId: string };

    if (!cartId) {
      throw new CustomError(StatusCodes.BadRequest, 'no cart id was provided');
    }
    const orderStatus = await Cart.findByPk(cartId, {
      attributes: ['status'],
    });
    if (!orderStatus) {
      return res.json({
        error: false,
        data: 'you do not have any orders',
      });
    }

    return res.json({
      test: 'test',
      error: false,
      data: orderStatus,
    });
  } catch (error) {
    next(error);
  }
};

export default getCartStatus;
