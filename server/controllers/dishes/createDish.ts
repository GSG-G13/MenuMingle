import { Request, Response, NextFunction } from 'express';
import { Dishes } from '../../models';
import { dishSchema } from '../../utils/validation/joi';

const createDish = async (req: Request, res: Response, next: NextFunction) => {
  const { dish } = req.body;
  try {
    const Dish = await dishSchema.validateAsync(dish);
    const newDish = await Dishes.create(Dish);
    if (!newDish) {
      return res.status(400).json({
        error: true,
        message: 'Bad request',
        data: {},
      });
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
