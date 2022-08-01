import { Router } from 'express';
import 'express-async-errors';
import { AuthController } from '../controllers';
import { errorHandler } from '../middlewares';

const authRoute = Router();

const authController = new AuthController();

authRoute.post('/', authController.login);

authRoute.use(errorHandler);

export default authRoute;