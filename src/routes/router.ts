import { Router } from 'express';
import productRoute from './products.routes';
import usersRoute from './users.routes';

const router = Router();

router.use('/products', productRoute);
router.use('/users', usersRoute);

export default router;