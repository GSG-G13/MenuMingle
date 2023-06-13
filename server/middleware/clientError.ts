import { Request, Response } from 'express';

const clientError = (req: Request, res: Response) => {
  res.status(404).json({
    error: true,
    msg: 'page not found',
  });
};

export default clientError;
