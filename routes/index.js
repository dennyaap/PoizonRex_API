import { Router } from 'express';
import productRouter from './productRouter.js';
import categoryRouter from './categoryRouter.js';
import roleRouter from './roleRouter.js';
import userRouter from './userRouter.js';
import brandRouter from './brandRouter.js';
import colorRouter from './colorRouter.js';
import sizeRouter from './sizeRouter.js';
import favoriteRouter from '../routes/favoriteRouter.js';
import deliveryTypeRouter from '../routes/deliveryTypeRouter.js';

import CheckRoleMiddleware from '../middleware/CheckRoleMiddleware.js';
import AuthMiddleware from '../middleware/AuthMiddleware.js';
import { roles } from '../config/roles.js';

const router = new Router();

router.use('/user', userRouter);

router.use(AuthMiddleware);

router.use('/product', productRouter);
router.use('/favorite', favoriteRouter);
router.use('/category', categoryRouter);
router.use('/brand', brandRouter);
router.use('/color', colorRouter);
router.use('/role', CheckRoleMiddleware(roles.ADMIN), roleRouter);
router.use('/size', sizeRouter);
router.use('/deliveryType', deliveryTypeRouter);

export default router;
