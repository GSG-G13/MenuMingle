import { Request, Response, NextFunction } from 'express';
import { Dish } from '../../models';
import { StatusCodes } from '../../utils/enum';
import { CustomError } from '../../utils';

const getDishById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const dish = await Dish.findByPk(id);
    if (!dish) {
      throw new CustomError(StatusCodes.NotFound, 'Dish not found');
    }
    res.status(200).json({
      error: false,
      message: 'Dish found successfully',
      data: dish,
    });
  } catch (err) {
    return next(err);
  }
};

export default getDishById;
