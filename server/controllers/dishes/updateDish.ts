import { Request, Response, NextFunction } from 'express';
import { Dish } from '../../models';
import { dishSchema } from '../../utils';
import { CustomError } from '../../utils';
import { StatusCodes } from '../../utils/enum';

const updateDish = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const newDish = await dishSchema.validateAsync(req.body);
    const [updatedCount, updatedDishes] = await Dish.update(newDish, {
      where: { id },
      returning: true,
    });

    if (updatedCount === 0) {
      throw new CustomError(
        StatusCodes.NotFound,
        'Dish not found or could not be updated',
      );
    }
    const updatedDish = updatedDishes[0];
    return res.json({
      error: false,
      message: 'Dish updated successfully',
      data: updatedDish,
    });
  } catch (err) {
    return next(err);
  }
};

export default updateDish;
