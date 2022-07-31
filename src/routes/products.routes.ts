import { Router } from 'express';
import ProductController from '../controllers';
import 'express-async-errors';
import errorHandler from '../middlewares';

const productRoute = Router();

const productController = new ProductController();

productRoute.get('/', productController.findAll);
productRoute.post('/', productController.create);

productRoute.use(errorHandler);

export default productRoute;