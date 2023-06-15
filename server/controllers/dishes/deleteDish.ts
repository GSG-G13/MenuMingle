import { Request, Response, NextFunction } from 'express';
import { Dishes } from '../../models';
import { DishesAttributes } from '../../utils/types';

const deleteDish = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const dish: DishesAttributes | null = await Dishes.findByPk(id);
    if (!dish) {
      return res.status(404).json({
        error: true,
        message: 'Dish not found',
        data: {},
      });
    }
    await Dishes.destroy({ where: { id } });
    res.status(204).json({
      error: false,
      message: 'Dish deleted successfully',
      data: dish,
    });
  } catch (err) {
    return next(err);
  }
};

export default deleteDish;
