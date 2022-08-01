import { Router } from 'express';
import authRoute from './login.routes';
import ordersRoute from './orders.routes';
import productRoute from './products.routes';
import usersRoute from './users.routes';

const router = Router();

router.use('/login', authRoute);
router.use('/products', productRoute);
router.use('/users', usersRoute);
router.use('/orders', ordersRoute);

export default router;