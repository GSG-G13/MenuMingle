import { Router, Request, Response } from 'express';

export const router: Router = Router();

router.get('/', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    msg: 'ok',
  });
});
