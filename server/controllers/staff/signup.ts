import {
  hashPassword,
  signToken,
  CustomError,
  signupSchema,
} from '../../utils';
import { StatusCodes } from '../../utils/enum';
import { NextFunction, Response, Request } from 'express';
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
      throw new CustomError('this email already exist', StatusCodes.BadRequest);
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

    return res.cookie('token', token).status(StatusCodes.Created).json({
      error: false,
      msg: 'the user has been created successfully',
      data: created,
    });
  } catch (error: unknown) {
    return next(error);
  }
};

export default signupController;
