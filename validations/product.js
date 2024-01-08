import { body, param, query } from 'express-validator';

export const productGetAllValidation = [
    query('name')
        .optional()
        .notEmpty()
        .withMessage('name must not be empty')
        .isString()
        .withMessage('name must be a string'),
    query('gender')
        .optional()
        .notEmpty()
        .withMessage('gender must not be empty')
        .isIn(['M', 'F'])
        .withMessage("gender can be 'M' or 'F'"),
    query('categoryId')
        .optional()
        .notEmpty()
        .optional()
        .withMessage('categoryId must not be empty')
        .isInt()
        .withMessage('categoryId must be a number')
        .toInt(),
    query('brandId')
        .optional()
        .notEmpty()
        .withMessage('brandId must not be empty')
        .isInt()
        .withMessage('brandId must be a number')
        .toInt(),
    query('colorId')
        .optional()
        .notEmpty()
        .withMessage('colorId must not be empty')
        .isInt()
        .withMessage('colorId must be a number')
        .toInt(),
    body('sizes')
        .optional()
        .notEmpty()
        .withMessage('sizes must not be empty')
        .isArray()
        .withMessage('sizes must be an array'),
    query('minPrice')
        .optional()
        .notEmpty()
        .withMessage('minPrice must not be empty')
        .isInt()
        .withMessage('minPrice must be a number'),
    query('maxPrice')
        .optional()
        .notEmpty()
        .withMessage('maxPrice must not be empty')
        .isInt()
        .withMessage('maxPrice must be a number'),
    query('orderBy')
        .optional()
        .notEmpty()
        .withMessage('orderBy must not be empty')
        .isString()
        .withMessage('orderBy must be a string'),
    query('sortBy')
        .optional()
        .notEmpty()
        .withMessage('sortBy must not be empty')
        .isIn(['ASC', 'DESC'])
        .withMessage("sortBy can be 'ASC' or 'DESC'"),
    query('page')
        .optional()
        .notEmpty()
        .withMessage('page must not be empty')
        .isInt()
        .withMessage('page must be a number'),
    query('limit')
        .optional()
        .notEmpty()
        .withMessage('limit must not be empty')
        .isInt()
        .withMessage('limit must be a number'),
];

export const productGetOneValidation = [
    param('id')
        .exists()
        .withMessage('missing id parameter')
        .toInt()
        .withMessage('the id parameter must be a number'),
    body('userId')
        .notEmpty()
        .withMessage('userId must not be empty')
        .isInt()
        .withMessage('userId must be a number'),
];

export const productCreateValidation = [
    body('name')
        .notEmpty()
        .withMessage('name must not be empty')
        .isString()
        .withMessage('name must be a string'),
    body('price')
        .notEmpty()
        .withMessage('price must not be empty')
        .isFloat()
        .withMessage('price must be a float'),
    body('discount')
        .notEmpty()
        .withMessage('discount must not be empty')
        .isFloat()
        .withMessage('discount must be a string'),
    body('gender')
        .notEmpty()
        .withMessage('gender must not be empty')
        .isIn(['M', 'F'])
        .withMessage("gender can be 'M' or 'F'"),
    body('amount')
        .notEmpty()
        .withMessage('amount must not be empty')
        .isInt()
        .withMessage('amount must be a number'),
    body('categoryId')
        .notEmpty()
        .withMessage('categoryId must not be empty')
        .isInt()
        .withMessage('categoryId must be a number'),
    body('brandId')
        .notEmpty()
        .withMessage('brandId must not be empty')
        .isInt()
        .withMessage('brandId must be a number'),
    body('colorId')
        .notEmpty()
        .withMessage('colorId must not be empty')
        .isInt()
        .withMessage('colorId must be a number'),
    body('sizes')
        .optional()
        .notEmpty()
        .withMessage('sizes must not be empty')
        .isArray()
        .withMessage('sizes must be an array'),
];

export const productRemoveValidation = [
    param('id')
        .exists()
        .withMessage('missing id parameter')
        .toInt()
        .withMessage('the id parameter must be a number'),
];

export const productUpdateValidation = [
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
    body('price')
        .optional()
        .notEmpty()
        .withMessage('price must not be empty')
        .isFloat()
        .withMessage('price must be a float'),
    body('discount')
        .optional()
        .notEmpty()
        .withMessage('discount must not be empty')
        .isFloat()
        .withMessage('discount must be a string'),
    body('gender')
        .optional()
        .notEmpty()
        .withMessage('gender must not be empty')
        .isIn(['M', 'F'])
        .withMessage("gender can be 'M' or 'F'"),
    body('amount')
        .optional()
        .notEmpty()
        .withMessage('amount must not be empty')
        .isInt()
        .withMessage('amount must be a number'),
    body('categoryId')
        .optional()
        .notEmpty()
        .withMessage('categoryId must not be empty')
        .isInt()
        .withMessage('categoryId must be a number'),
    body('brandId')
        .optional()
        .notEmpty()
        .withMessage('brandId must not be empty')
        .isInt()
        .withMessage('brandId must be a number'),
    body('colorId')
        .optional()
        .notEmpty()
        .withMessage('colorId must not be empty')
        .isInt()
        .withMessage('colorId must be a number'),
];

export const productAddImageValidation = [
    param('id')
        .exists()
        .withMessage('missing id parameter')
        .toInt()
        .withMessage('the id parameter must be a number'),
];
