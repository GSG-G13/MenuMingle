import { Router } from 'express';
import { signupController } from '../controllers';
import login from '../controllers/staff/login';

export const userRouter = Router();

userRouter.post('/auth/register', signupController);
userRouter.post('/auth/login', login);
