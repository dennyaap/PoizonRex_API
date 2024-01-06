import jwt from 'jsonwebtoken';
import ApiError from '../error/ApiError.js';
import { verifyToken } from '../utils/auth.js';

export default function (roleId) {
    return function (req, res, next) {
        try {
            const user = req.user;

            if (user.roleId !== roleId) {
                return next(ApiError.forbiden('No access'));
            }

            return next();
        } catch (e) {
            return next(ApiError.unauthorized('Not authorized'));
        }
    };
}
