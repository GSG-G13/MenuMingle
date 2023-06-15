import { Router } from 'express';
import { signupController } from '../controllers';

const authRouter: Router = Router();

authRouter.post('/register', signupController);

export default authRouter;
