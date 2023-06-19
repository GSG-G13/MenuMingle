import { Request, Response, NextFunction } from 'express';
import { Dish } from '../../models';
import { StatusCodes } from '../../utils/enum';
import { CustomError } from '../../utils';

const getDishById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findByPk(id);
    if (!dish) {
      throw new CustomError(StatusCodes.NotFound, 'Dish not found');
    }
    return res.json({
      error: false,
      message: 'Dish found successfully',
      data: dish,
    });
  } catch (err) {
    return next(err);
  }
};

export default getDishById;
