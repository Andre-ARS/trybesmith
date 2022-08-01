import { Router } from 'express';
import { AuthController } from '../controllers';
import 'express-async-errors';
import errorHandler from '../middlewares';

const authRoute = Router();

const authController = new AuthController();

authRoute.post('/', authController.login);

authRoute.use(errorHandler);

export default authRoute;