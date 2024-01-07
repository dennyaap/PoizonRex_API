import { Router } from 'express';

import productController from '../controllers/ProductController.js';
import {
    productGetOneValidation,
    productGetAllValidation,
    productCreateValidation,
    productRemoveValidation,
    productUpdateValidation,
    productAddImageValidation,
} from '../validations/product.js';

import CheckRoleMiddleware from '../middleware/CheckRoleMiddleware.js';
import ValidationMiddleware from '../middleware/ValidationMiddleware.js';

import { roles } from '../config/roles.js';
import LoadImagesMiddleware from '../middleware/LoadImagesMiddleware.js';

const router = new Router();

router.get('/:id', [productGetOneValidation, ValidationMiddleware], productController.getOne);

router.get('/', [productGetAllValidation, ValidationMiddleware], productController.getAll);
router.post(
    '/',
    [CheckRoleMiddleware(roles.ADMIN), productCreateValidation, ValidationMiddleware],
    productController.create,
);

router.post(
    '/:id/images',
    [CheckRoleMiddleware(roles.ADMIN), productAddImageValidation, LoadImagesMiddleware],
    productController.addImages,
);

router.delete(
    '/:id',
    [CheckRoleMiddleware(roles.ADMIN), productRemoveValidation, ValidationMiddleware],
    productController.remove,
);

router.patch(
    '/:id',
    [CheckRoleMiddleware(roles.ADMIN), productUpdateValidation, ValidationMiddleware],
    productController.update,
);

export default router;
