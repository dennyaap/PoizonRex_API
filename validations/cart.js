import { param } from 'express-validator';

export const cartValidation = [
    param('productId')
        .exists()
        .withMessage('missing productId parameter')
        .toInt()
        .withMessage('the productId parameter must be a number'),
];
