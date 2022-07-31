import { Router } from 'express';
import ordersRoute from './orders.routes';
import productRoute from './products.routes';
import usersRoute from './users.routes';

const router = Router();

router.use('/products', productRoute);
router.use('/users', usersRoute);
router.use('/orders', ordersRoute);

export default router;