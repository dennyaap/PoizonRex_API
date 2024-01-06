import { Router } from 'express';

import brandController from '../controllers/BrandController.js';
import {
    brandCreateValidation,
    brandRemoveValidation,
    brandUpdateValidation,
} from '../validations/brand.js';

import ValidationMiddleware from '../middleware/ValidationMiddleware.js';
import CheckRoleMiddleware from '../middleware/CheckRoleMiddleware.js';

import { roles } from '../config/roles.js';

const router = new Router();

router.get('/', brandController.getAll);
router.post(
    '/',
    [CheckRoleMiddleware(roles.ADMIN), brandCreateValidation, ValidationMiddleware],
    brandController.create,
);

router.delete(
    '/:id',
    [CheckRoleMiddleware(roles.ADMIN), brandRemoveValidation, ValidationMiddleware],
    brandController.remove,
);

router.patch(
    '/:id',
    [CheckRoleMiddleware(roles.ADMIN), brandUpdateValidation, ValidationMiddleware],
    brandController.update,
);

export default router;
