import { Router } from 'express';

import { cartController } from '../controllers/index.js';
import { cartValidation } from '../validations/cart.js';

import ValidationMiddleware from '../middleware/ValidationMiddleware.js';
import AuthMiddleware from '../middleware/AuthMiddleware.js';

const router = new Router();

router.use(AuthMiddleware);

router.get('/', cartController.getAll);
router.post('/:productId', [cartValidation, ValidationMiddleware], cartController.create);

router.delete('/:productId', [cartValidation, ValidationMiddleware], cartController.remove);

router.patch(
    '/:productId/increase',
    [cartValidation, ValidationMiddleware],
    cartController.increase,
);

router.patch(
    '/:productId/decrease',
    [cartValidation, ValidationMiddleware],
    cartController.decrease,
);

export default router;
