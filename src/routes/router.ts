import { Router } from 'express';
import productRoute from './products.routes';

const router = Router();

router.use(productRoute);

export default router;