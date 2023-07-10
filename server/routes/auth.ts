import { Router } from 'express';
import { signupController, loginController, logout } from '../controllers';

const authRouter = Router();

authRouter.post('/register', signupController);
authRouter.post('/login', loginController);
authRouter.post('/logout', logout);

export default authRouter;
