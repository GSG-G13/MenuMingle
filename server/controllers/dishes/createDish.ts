import { Request, Response, NextFunction } from 'express';
import { Dish } from '../../models';
import { dishSchema } from '../../utils/validation/joi';
import { CustomError } from '../../utils';
import { StatusCodes } from '../../utils/enum';

const createDish = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dish = await dishSchema.validateAsync(req.body);
    const newDish = await Dish.create(dish);
    if (!newDish) {
      throw new CustomError(
        StatusCodes.ServerError,
        'Dish could not be created',
      );
    }
    res.status(201).json({
      error: false,
      message: 'Dish created successfully',
      data: newDish,
    });
  } catch (err) {
    return next(err);
  }
};

export default createDish;
