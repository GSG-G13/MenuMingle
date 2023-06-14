import { Router, Request, Response } from 'express';
import login from '../controllers/users/login';

export const router: Router = Router();

router.get('/', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    msg: 'ok',
  });
});
router.post('/login', login);
