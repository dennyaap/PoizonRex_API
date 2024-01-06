import { Router } from 'express';
import productRouter from './productRouter.js';
import categoryRouter from './categoryRouter.js';
import roleRouter from './roleRouter.js';
import userRouter from './userRouter.js';
import brandRouter from './brandRouter.js';
import colorRouter from './colorRouter.js';

import CheckRoleMiddleware from '../middleware/CheckRoleMiddleware.js';
import { roles } from '../config/roles.js';
import AuthMiddleware from '../middleware/AuthMiddleware.js';

const router = new Router();

router.use('/user', userRouter);

router.use(AuthMiddleware);

router.use('/product', productRouter);
router.use('/category', categoryRouter);
router.use('/brand', brandRouter);
router.use('/color', colorRouter);
router.use('/role', CheckRoleMiddleware(roles.ADMIN), roleRouter);

export default router;
