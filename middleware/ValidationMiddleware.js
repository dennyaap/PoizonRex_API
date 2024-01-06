import { validationResult } from 'express-validator';
import ApiError from '../error/ApiError.js';

export default function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return next(ApiError.badRequest(errors.array()));
    }
    return next();
}
