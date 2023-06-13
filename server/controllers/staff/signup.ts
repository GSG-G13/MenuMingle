import bcrypt from 'bcrypt';
import { NextFunction, Response, Request } from 'express';
import { signupSchema } from '../../utils';
import { Staff } from '../../models';
import { CustomError } from '../../utils/index.js';
import { number, string } from 'joi';
const signupController = (req: Request, res: Response, next: NextFunction) => {
  const {
    body: { username, email, password },
  } = req;
  signupSchema
    .validateAsync({ username, email, password })
    .then(({ email }) => {
      return Staff.findAll({ where: { email: email } });
    })
    .then(({ rows }) => {
      if (rows.length > 0) {
        throw new CustomError(401, 'this email already exist');
      }
    })
    .then(() => bcrypt.hash(password, 12))
    .then(hash => {
      return Staff.create({ id: 1, username, email, password: hash });
    })

    .catch(error => {
      next(error);
    });

  res.status(200).json({
    massage: 'its works',
  });
};
export default signupController;
