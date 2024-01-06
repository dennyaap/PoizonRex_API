import ApiError from '../error/ApiError.js';
import { verifyToken } from '../utils/auth.js';
import JwtError from '../error/JwtError.js';

export default function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return next(ApiError.badRequest('Invalid token'));
        }

        const verified = verifyToken(token);
        req.user = verified;

        return next();
    } catch (err) {
        JwtError.catchInvalidJwt(err);
        JwtError.catchExpiredJwt(err);

        throw err;
    }
}
