import jwt from 'jsonwebtoken';
import ApiError from '../error/ApiError.js';
import { verifyToken } from '../utils/auth.js';

export default function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return next(ApiError.badRequest('Invalid token'));
        }

        const decoded = verifyToken(token);
        req.user = decoded;

        return next();
    } catch (e) {
        return next(ApiError.unauthorized('Not authorized'));
    }
}
