import { body, param } from 'express-validator';

export const categoryCreateValidation = [
    body('name')
        .notEmpty()
        .withMessage('name must not be empty')
        .isString()
        .withMessage('name must be a string'),
];

export const categoryRemoveValidation = [
    param('id')
        .exists()
        .withMessage('missing id parameter')
        .toInt()
        .withMessage('the id parameter must be a number'),
];

export const categoryUpdateValidation = [
    param('id')
        .exists()
        .withMessage('missing id parameter')
        .toInt()
        .withMessage('the id parameter must be a number'),
    body('name')
        .optional()
        .notEmpty()
        .withMessage('name must not be empty')
        .isString()
        .withMessage('name must be a string'),
];
