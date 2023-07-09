import { NextFunction, Response, Request } from 'express';

import {
  hashPassword,
  signToken,
  CustomError,
  signupSchema,
} from '../../utils';
import { StatusCodes } from '../../utils/enum';
import { Staff } from '../../models';
import { staffAttribute } from '../../utils/types';

const signupController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password, roleId } = await signupSchema.validateAsync(
      req.body,
    );

    const existStaff = await Staff.findOne({ where: { username } });

    if (existStaff) {
      throw new CustomError(StatusCodes.BadRequest, 'this email already exist');
    }

    const hashedPassword = await hashPassword(password);

    const created: staffAttribute = await Staff.create({
      username,
      password: hashedPassword,
      role_id: roleId,
    });

    const token = await signToken({
      id: created.id as number,
      username,
      role: roleId,
    });

    return res
      .status(StatusCodes.Created)
      .cookie('token', token)
      .json({
        error: false,
        msg: 'The user have been created successfully!',
        data: {
          id: created.id,
          username: created.username,
        },
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);

    next(error);
  }
};

export default signupController;
