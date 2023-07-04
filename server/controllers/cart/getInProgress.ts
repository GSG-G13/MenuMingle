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
    next(error);
  }
};
export default getInProgress;
