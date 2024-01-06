import { Router } from 'express';

import categoryController from '../controllers/CategoryController.js';
import {
    categoryCreateValidation,
    categoryRemoveValidation,
    categoryUpdateValidation,
} from '../validations/category.js';

import CheckRoleMiddleware from '../middleware/CheckRoleMiddleware.js';
import ValidationMiddleware from '../middleware/ValidationMiddleware.js';

import { roles } from '../config/roles.js';

const router = new Router();

router.get('/', categoryController.getAll);
router.post(
    '/',
    [CheckRoleMiddleware(roles.ADMIN), categoryCreateValidation, ValidationMiddleware],
    categoryController.create,
);

router.delete(
    '/:id',
    [CheckRoleMiddleware(roles.ADMIN), categoryRemoveValidation, ValidationMiddleware],
    categoryController.remove,
);

router.patch(
    '/:id',
    [CheckRoleMiddleware(roles.ADMIN), categoryUpdateValidation, ValidationMiddleware],
    categoryController.update,
);

export default router;
