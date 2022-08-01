import { Router } from 'express';
import 'express-async-errors';
import { UserController } from '../controllers';
import { errorHandler } from '../middlewares';

const usersRoute = Router();

const userController = new UserController();

usersRoute.post('/', userController.create);

usersRoute.use(errorHandler);

export default usersRoute;