import { Request, Response, NextFunction } from 'express';
import { Staff } from '../../models';
import { loginSchema } from '../../utils';
import { CustomError } from '../../utils';
import { StatusCodes } from '../../utils/enum';
import { comparePassword } from '../../utils';

const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = await loginSchema.validateAsync(req.body);
    const existStaff = await Staff.findOne({ where: { username } });
    if (!existStaff) {
      throw new CustomError(
        StatusCodes.Unauthenticated,
        'the user does not exit',
      );
    }

    const isMatch = await comparePassword(password, existStaff.password);
    if (isMatch) {
      res.json({
        error: false,
        msg: 'the has been login successfully',
        existStaff,
      });
    } else {
      throw new CustomError(
        StatusCodes.Unauthenticated,
        'please check the password',
      );
    }
  } catch (error) {
    next(error);
  }
};

export default loginController;
