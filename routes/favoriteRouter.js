import { Router } from 'express';

import { favoriteController } from '../controllers/index.js';
import { favoriteCreateValidation, favoriteRemoveValidation } from '../validations/favorite.js';

import ValidationMiddleware from '../middleware/ValidationMiddleware.js';

const router = new Router();

router.get('/', favoriteController.getAll);
router.post(
    '/:productId',
    [favoriteCreateValidation, ValidationMiddleware],
    favoriteController.create,
);
router.delete(
    '/:productId',
    [favoriteRemoveValidation, ValidationMiddleware],
    favoriteController.remove,
);

export default router;
