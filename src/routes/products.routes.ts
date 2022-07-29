import { Router } from 'express';
import ProductController from '../controllers';

const productRoute = Router();

const productController = new ProductController();

productRoute.post('/products', productController.create);

export default productRoute;