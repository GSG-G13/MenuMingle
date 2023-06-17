import { Router } from 'express';
import { signupController, loginController } from '../controllers';

const authRouter = Router();

authRouter.post('/register', signupController);
authRouter.post('/login', loginController);

export default authRouter;
