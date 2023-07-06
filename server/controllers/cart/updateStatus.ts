import { Request, Response, NextFunction } from 'express';
import { Cart } from '../../models';
import { CartStatus, CustomError, StatusCodes } from '../../utils';

const updateCartStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { cartId, cartStatus } = req.query as {
    cartId: string;
    cartStatus: string;
  };

  try {
    const cart = await Cart.findByPk(cartId);

    if (!cart) {
      throw new CustomError(StatusCodes.BadRequest, 'cart not found');
    }
    if (cartStatus === 'done') {
      cart.status = CartStatus.Value3;
    } else {
      cart.status = CartStatus.Value2;
    }
    await cart.save();

    return res.json(cart);
  } catch (error) {
    next(error);
  }
};

export default updateCartStatus;
