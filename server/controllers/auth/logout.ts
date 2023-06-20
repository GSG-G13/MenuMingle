import { Response, NextFunction } from 'express';

const logout = async (req: any, res: Response, next: NextFunction) => {
  try {
    res.clearCookie('token').json({ message: 'Logout successfully' });
  } catch (err) {
    next(err);
  }
};

export default logout;
