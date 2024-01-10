import { Router } from 'express';

import { deliveryTypeController } from '../controllers/index.js';
import {
    deliveryTypeCreateValidation,
    deliveryTypeRemoveValidation,
    deliveryTypeUpdateValidation,
} from '../validations/deliveryType.js';

import ValidationMiddleware from '../middleware/ValidationMiddleware.js';
import CheckRoleMiddleware from '../middleware/CheckRoleMiddleware.js';

import { roles } from '../config/roles.js';

const router = new Router();

router.get('/', deliveryTypeController.getAll);
router.post(
    '/',
    [CheckRoleMiddleware(roles.ADMIN), deliveryTypeCreateValidation, ValidationMiddleware],
    deliveryTypeController.create,
);

router.delete(
    '/:id',
    [CheckRoleMiddleware(roles.ADMIN), deliveryTypeRemoveValidation, ValidationMiddleware],
    deliveryTypeController.remove,
);

router.patch(
    '/:id',
    [CheckRoleMiddleware(roles.ADMIN), deliveryTypeUpdateValidation, ValidationMiddleware],
    deliveryTypeController.update,
);

export default router;
