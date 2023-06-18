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
        data: {
          id: existStaff.id,
          username: existStaff.username,
        },
      });
    } else {
      throw new CustomError(
        StatusCodes.Unauthenticated,
        'please check the password',
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw new CustomError(StatusCodes.BadRequest, 'Wrong login credentials');
    }
    next(error);
  }
};

export default loginController;
