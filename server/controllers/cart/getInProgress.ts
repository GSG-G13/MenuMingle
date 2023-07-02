import { Request, Response, NextFunction } from 'express';
import { Order, Cart } from '../../models';

const getInProgress = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const dishes = await Cart.findAll({
      include: [
        {
          model: Order,
        },
      ],
      where: {
        status: 'in progress',
      },
    });

    res.json(dishes);
  } catch (error) {
    console.error('Error retrieving orders in progress:', error);
    next(error);
  }
};
export default getInProgress;
