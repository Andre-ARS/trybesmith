import { Router } from 'express';
import 'express-async-errors';
import { OrderController } from '../controllers';
import { errorHandler, tokenValidation } from '../middlewares';

const ordersRoute = Router();

const orderController = new OrderController();

ordersRoute.get('/', orderController.findAll);
ordersRoute.use(tokenValidation);
ordersRoute.post('/', orderController.create);

ordersRoute.use(errorHandler);

export default ordersRoute;