import { Router } from 'express';

import { colorController } from '../controllers/index.js';
import {
    colorCreateValidation,
    colorRemoveValidation,
    colorUpdateValidation,
} from '../validations/color.js';

import ValidationMiddleware from '../middleware/ValidationMiddleware.js';
import CheckRoleMiddleware from '../middleware/CheckRoleMiddleware.js';

import { roles } from '../config/roles.js';

const router = new Router();

router.get('/', colorController.getAll);
router.post(
    '/',
    [CheckRoleMiddleware(roles.ADMIN), colorCreateValidation, ValidationMiddleware],
    colorController.create,
);

router.delete(
    '/:id',
    [CheckRoleMiddleware(roles.ADMIN), colorRemoveValidation, ValidationMiddleware],
    colorController.remove,
);

router.patch(
    '/:id',
    [CheckRoleMiddleware(roles.ADMIN), colorUpdateValidation, ValidationMiddleware],
    colorController.update,
);

export default router;
