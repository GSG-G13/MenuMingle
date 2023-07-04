import { Request, Response, NextFunction } from 'express';
import { Cart } from '../../models';
import { CartStatus } from '../../utils';

const updateCartStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  try {
    const cart = await Cart.findByPk(id);

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    cart.status = CartStatus.Value3;
    await cart.save();

    return res.json(cart);
  } catch (error) {
    console.error('Error updating cart status:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export default updateCartStatus;
