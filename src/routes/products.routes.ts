import { Router } from 'express';
import 'express-async-errors';
import { ProductController } from '../controllers';
import { errorHandler } from '../middlewares';

const productRoute = Router();

const productController = new ProductController();

productRoute.get('/', productController.findAll);
productRoute.post('/', productController.create);

productRoute.use(errorHandler);

export default productRoute;