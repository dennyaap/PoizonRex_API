import { Router } from 'express';

import userController from '../controllers/UserController.js';
import { registerValidation, loginValidation } from '../validations/user.js';

import ValidationMiddleware from '../middleware/ValidationMiddleware.js';
import VerifyDataMiddleware from '../middleware/VerifyDataMiddleware.js';

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

export default router;
