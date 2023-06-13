import { Router } from 'express';
import { signupController } from '../controllers';
export const userRouter: Router = Router();

userRouter.post('/auth/register', signupController);
