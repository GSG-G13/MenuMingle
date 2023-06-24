import { NextFunction, Response, Request } from 'express';
import { Cart, Order, Dish } from '../../models';
import { CartStatus } from '../../utils';
import { Op, literal } from 'sequelize';

const addToCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      body: { orders, customerId, note },
    } = req;
    const DishesIds = orders.map((order: any) => order.dish_id);

    const cart = await Cart.create({
      note,
      status: CartStatus.Value1,
      customerId,
      totalPrice: 1,
    });

    const cartId = await cart.id;

    orders.forEach((element: any) => {
      element.cart_id = cartId;
    });
    const createdOrder = await Order.bulkCreate(orders);

    const allDishesPrices = await Dish.findAll({
      attributes: [[literal(`SUM(price * quantity)`), 'price']],
      where: {
        id: {
          [Op.in]: DishesIds,
        },
      },
      include: [
        {
          model: Order,
          as: 'Orders',
          attributes: [],
        },
      ],
      group: ['Dish.id', 'Orders.id'],
    });
    const totalPrice = allDishesPrices.reduce((acc, current) => {
      return (acc += current.price);
    }, 0);
    cart.totalPrice = totalPrice;

    res.json({
      status: 'the order is in progress',
      cart,
    });
  } catch (error) {
    next(error);
  }
};
export default addToCart;
