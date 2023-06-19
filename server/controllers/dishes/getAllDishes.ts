import { Request, Response, NextFunction } from 'express';
import { Dish } from '../../models';
import { StatusCodes } from '../../utils/enum';
import { CustomError } from '../../utils';

const getAllDishes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const dishes = await Dish.findAll();
    if (!dishes) {
      throw new CustomError(StatusCodes.NotFound, 'Dishes not found');
    }
    return res.json({
      error: false,
      message: 'Dishes found successfully',
      data: dishes,
    });
  } catch (err) {
    return next(err);
  }
};

export default getAllDishes;
