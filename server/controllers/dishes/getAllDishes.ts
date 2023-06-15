import { Request, Response, NextFunction } from 'express';
import { Dishes } from '../../models';

const getAllDishes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const dishes = await Dishes.findAll();
    if (!dishes) {
      return res.status(404).json({
        error: true,
        message: 'Dishes not found',
        data: {},
      });
    }
    res.status(200).json({
      error: false,
      message: 'Dishes found successfully',
      data: dishes,
    });
  } catch (err) {
    return next(err);
  }
};

export default getAllDishes;
