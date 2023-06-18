import { Request, Response, NextFunction } from 'express';
import { Dish } from '../../models';
import { DishesAttributes } from '../../utils/types';
import { StatusCodes } from '../../utils/enum';
import { CustomError } from '../../utils';

const deleteDish = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const dish: DishesAttributes | null = await Dish.findByPk(id);
    if (!dish) {
      throw new CustomError(StatusCodes.NotFound, 'Dish not found');
    }
    await Dish.destroy({ where: { id } });
    res.status(200).json({
      error: false,
      message: 'Dish deleted successfully',
      data: dish,
    });
  } catch (err) {
    return next(err);
  }
};

export default deleteDish;
