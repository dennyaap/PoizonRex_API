import { Router } from 'express';

import { sizeController } from '../controllers/index.js';
import {
    sizeCreateValidation,
    sizeRemoveValidation,
    sizeUpdateValidation,
} from '../validations/size.js';

import ValidationMiddleware from '../middleware/ValidationMiddleware.js';
import CheckRoleMiddleware from '../middleware/CheckRoleMiddleware.js';

import { roles } from '../config/roles.js';

const router = new Router();

router.get('/', sizeController.getAll);
router.post(
    '/',
    [CheckRoleMiddleware(roles.ADMIN), sizeCreateValidation, ValidationMiddleware],
    sizeController.create,
);

router.delete(
    '/:id',
    [CheckRoleMiddleware(roles.ADMIN), sizeRemoveValidation, ValidationMiddleware],
    sizeController.remove,
);

router.patch(
    '/:id',
    [CheckRoleMiddleware(roles.ADMIN), sizeUpdateValidation, ValidationMiddleware],
    sizeController.update,
);

export default router;
