import { Router } from 'express';

import { roleController } from '../controllers/index.js';
import {
    roleCreateValidation,
    roleRemoveValidation,
    roleUpdateValidation,
} from '../validations/role.js';

import ValidationMiddleware from '../middleware/ValidationMiddleware.js';

const router = new Router();

router.get('/', roleController.getAll);
router.post('/', [roleCreateValidation, ValidationMiddleware], roleController.create);

router.delete('/:id', [roleRemoveValidation, ValidationMiddleware], roleController.remove);

router.patch('/:id', [roleUpdateValidation, ValidationMiddleware], roleController.update);

export default router;
