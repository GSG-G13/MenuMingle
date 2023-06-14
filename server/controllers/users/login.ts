import { Request, Response, NextFunction } from 'express';
import { Staff } from '../../models';
import { loginSchema } from '../../utils';

const login = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  loginSchema
    .validateAsync({ username, password })
    .then(({ username }) => {
      return Staff.findOne({ where: { username } });
    })
    .then(response => {
      console.log(response);
      res.json({ massage: 'Hello' });
    });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // .then((user: any) => {
  //   if (!user) {
  //     throw new CustomError('User not found', 400);
  //   }
  //   return compare(password, user.password);
  // })
  // .then((isPasswordValid: boolean) => {
  //   if (!isPasswordValid) {
  //     throw new CustomError('Invalid email or password', 400);
  //   }
  // })
  // .then(() => {
  //   return tokenSigner({ id, username });
  // })
  // .then((token: unknown) => {
  //   return res
  //     .cookie('token', token, {
  //       httpOnly: true,
  //       maxAge: 1000 * 60 * 60 * 24,
  //     })
  //     .json({
  //       error: false,
  //       message: 'Successfully logged in',
  //       data: {
  //         user: { id, username },
  //       },
  //     });
  // })
  // .catch(err => {
  //   next(err);
  // });
};

export default login;
