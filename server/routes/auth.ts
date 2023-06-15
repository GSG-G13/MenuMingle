import { Router } from 'express';
import { signupController } from '../controllers';

const authRouter = Router();

authRouter.post('/register', signupController);

export default authRouter;
