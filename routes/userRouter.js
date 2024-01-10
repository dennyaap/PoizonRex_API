import { Router } from 'express';

import { userController } from '../controllers/index.js';
import { registerValidation, loginValidation } from '../validations/user.js';

import ValidationMiddleware from '../middleware/ValidationMiddleware.js';
import VerifyDataMiddleware from '../middleware/VerifyDataMiddleware.js';

import cartRouter from '../routes/cartRouter.js';

const router = new Router();

router.post(
    '/registration',
    [registerValidation, ValidationMiddleware, VerifyDataMiddleware],
    userController.registration,
);
router.post(
    '/login',
    [loginValidation, ValidationMiddleware, VerifyDataMiddleware],
    userController.login,
);

router.use('/cart', cartRouter);

export default router;
