import { body } from 'express-validator';

export const loginValidation = [
    body('initData')
        .notEmpty()
        .withMessage('initData must not be empty')
        .isString()
        .withMessage('initData must be a string'),
];

export const registerValidation = [
    body('initData')
        .notEmpty()
        .withMessage('initData must not be empty')
        .isString()
        .withMessage('initData must be a string'),
];
