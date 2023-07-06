import { Request, Response, NextFunction } from 'express';
import { Staff } from '../../models';

const getUserByUsername = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username } = req.params;

    const user = await Staff.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return res.json({
        error: true,
        message: 'User not found',
      });
    }

    return res.json({
      error: false,
      message: 'User found successfully',
      data: user,
    });
  } catch (err: unknown) {
    next(err);
  }
};

export default getUserByUsername;
