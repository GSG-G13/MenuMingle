import { Request, Response, NextFunction } from 'express';
import { Order, Cart, Dish } from '../../models';
import { CartAttributes, OrderAttributes, DishesAttributes } from '../../utils';

interface OrderWithDish extends OrderAttributes {
  Dish: DishesAttributes;
}
interface DishesWithQuantity extends DishesAttributes {
  quantity: number;
}
interface CartWithOrder extends CartAttributes {
  Orders: OrderWithDish[];
}

const convertToPlainObject = (instance: any): any => {
  if (!instance) {
    return null;
  }

  const plainObject = instance.toJSON();
  delete plainObject._model;

  return plainObject;
};

const getDishesByCartId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { cartId } = req.params;

    const cart = (await Cart.findByPk(cartId, {
      include: [
        {
          model: Order,
          include: [Dish],
        },
      ],
    })) as CartWithOrder | null;

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const dishes: DishesWithQuantity[] = cart.Orders.map(order => ({
      ...convertToPlainObject(order.Dish),
      quantity: order.quantity,
    }));

    res.json(dishes);
  } catch (error) {
    console.error('Error retrieving dishes by cart ID:', error);
    next(error);
  }
};

export default getDishesByCartId;
