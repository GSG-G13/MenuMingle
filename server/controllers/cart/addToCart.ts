import { NextFunction, Response, Request } from 'express';
import { Cart, Order, Dish } from '../../models';
import { CartStatus } from '../../utils';
import { fn, literal } from 'sequelize';
import { cartSchema } from '../../utils';

const addToCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orders, customerId, note } = await cartSchema.validateAsync(
      req.body,
    );

    const cart = await Cart.create({
      note,
      status: CartStatus.Value1,
      customerId,
    });

    const cartId = await cart.id;

    orders.forEach((element: any) => {
      element.cart_id = cartId;
    });
    await Order.bulkCreate(orders);

    const allDishesPrices = await Order.findAll({
      attributes: [[fn('SUM', literal('price * quantity')), 'totalPrice']],
      include: [
        {
          model: Cart,
          where: { id: cartId },
          attributes: [],
        },
        {
          model: Dish,
          attributes: [],
        },
      ],
      group: ['Order.id', 'Dish.id', 'Cart.id'],
    });

    const totalPrice = allDishesPrices.reduce((accumulator, current) => {
      return current.dataValues.totalPrice + accumulator;
    }, 0);

    return res.json({
      error: false,
      msg: 'the order has been saved successfully',
      price: totalPrice,
      cartId,
    });
  } catch (error) {
    return next(error);
  }
};
export default addToCart;
