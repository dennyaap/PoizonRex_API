import { param } from 'express-validator';

export const favoriteCreateValidation = [
    param('productId')
        .exists()
        .withMessage('missing productId parameter')
        .toInt()
        .withMessage('the productId parameter must be a number'),
];

export const favoriteRemoveValidation = [
    param('productId')
        .exists()
        .withMessage('missing productId parameter')
        .toInt()
        .withMessage('the productId parameter must be a number'),
];
