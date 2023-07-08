import { Request, Response, NextFunction } from 'express';
import { Staff } from '../../models';
import { loginSchema } from '../../utils';
import { CustomError } from '../../utils';
import { StatusCodes } from '../../utils/enum';
import { comparePassword } from '../../utils';
import { signToken } from '../../utils';
import { Role } from '../../models';
import { staffAttribute } from '../../utils/types';

const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = await loginSchema.validateAsync(req.body);

    const existStaff = (await Staff.findOne({
      where: { username },
      include: [
        {
          model: Role,
          attributes: ['role'],
        },
      ],
    })) as staffAttribute & { Role: { role: string } };

    if (!existStaff) {
      throw new CustomError(
        StatusCodes.Unauthenticated,
        'the user does not exit',
      );
    }

    const isMatch = await comparePassword(password, existStaff.password);
    const token = await signToken({
      id: existStaff.id as number,
      username,
      role: existStaff.Role.role,
    });
    if (!isMatch) {
      throw new CustomError(
        StatusCodes.Unauthenticated,
        'please check the password',
      );
    }
    res.cookie('token', token).json({
      error: false,
      msg: 'the has been login successfully',
      data: {
        id: existStaff.id,
        username: existStaff.username,
        role: existStaff.Role.role,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw new CustomError(StatusCodes.BadRequest, 'Wrong login credentials');
    }
    next(error);
  }
};

export default loginController;
