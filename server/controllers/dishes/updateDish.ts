import { Request, Response, NextFunction } from 'express';
import { Dish } from '../../models';
import { dishSchema } from '../../utils/validation/joi';
import { CustomError } from '../../utils';
import { StatusCodes } from '../../utils/enum';

const updateDish = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
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
    res.status(200).json({
      error: false,
      message: 'Dish updated successfully',
      data: updatedDish,
    });
  } catch (err) {
    return next(err);
  }
};

export default updateDish;
