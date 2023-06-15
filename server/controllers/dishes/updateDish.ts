import { Request, Response, NextFunction } from 'express';
import { Dishes } from '../../models';

const updateDish = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { dish } = req.body;
  try {
    const updatedDish = await Dishes.update(dish, { where: { id } });
    if (!updatedDish) {
      return res.status(400).json({
        error: true,
        message: 'Bad request',
        data: {},
      });
    }
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
