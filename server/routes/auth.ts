import { Router } from 'express';
import {
  signupController,
  loginController,
  logout,
  getUserByUsername,
} from '../controllers';

const authRouter = Router();

authRouter.post('/register', signupController);
authRouter.post('/login', loginController);
authRouter.post('/logout', logout);
authRouter.get('/getUserByUsername/:username', getUserByUsername);

export default authRouter;
