import { Router } from 'express';
import { OrderController } from '../controllers';
import 'express-async-errors';
import errorHandler from '../middlewares';

const ordersRoute = Router();

const orderController = new OrderController();

ordersRoute.get('/', orderController.findAll);

ordersRoute.use(errorHandler);

export default ordersRoute;