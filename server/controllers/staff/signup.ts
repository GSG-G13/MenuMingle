import bcrypt from 'bcrypt';
import { NextFunction, Response, Request } from 'express';
import { Staff } from '../../models';
import { CustomError, signupSchema } from '../../utils';

const signupController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = await signupSchema.validateAsync(req.body);
    const existStaff = await Staff.findOne({ where: { username } });
    console.log(existStaff);
    if (existStaff) {
      throw new CustomError(401, 'this email already exist');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const created = await Staff.create({ username, password: hashedPassword });
    return res.json({
      data: created,
    });
  } catch (error: any) {
    return next(error);
  }
};

export default signupController;
