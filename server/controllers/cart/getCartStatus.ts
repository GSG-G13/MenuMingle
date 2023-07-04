import { Request, Response, NextFunction } from 'express';
import { Cart } from '../../models';

const getOrderStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { cartId } = req.params;
    const orderStatus = await Cart.findByPk(cartId, {
      attributes: ['status'],
    });
    if (!orderStatus) {
      return res.json({
        error: false,
        data: 'you do not have any orders',
      });
    }
    res.json({
      error: false,
      data: orderStatus,
    });
  } catch (error) {
    next(error);
  }
};

export default getOrderStatus;
