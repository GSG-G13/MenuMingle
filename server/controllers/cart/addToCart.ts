import { NextFunction, Response, Request } from 'express';
import { Cart, Order, Dish } from '../../models';
import { CartStatus } from '../../utils';
import { fn, literal } from 'sequelize';
import { cartSchema } from '../../utils';
import { sendOrderToKitchen } from '../../services/sendOrderToKitchen';
import { io as socket } from '../../index';

import { Socket } from 'socket.io';

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

    const cartId = cart.id;

    orders.forEach((element: any) => {
      element.cart_id = cartId;
    });
    await Order.bulkCreate(orders);

    // ? cart id, ingredients, orders id.
    console.log(socket, 'socket from the controller');
    sendOrderToKitchen(socket as unknown as Socket, cartId, orders);

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

    return res.json({
      error: false,
      msg: 'the order has been saved successfully',
      data: allDishesPrices,
    });
  } catch (error) {
    return next(error);
  }
};
export default addToCart;
