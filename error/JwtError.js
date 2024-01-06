import jwt from 'jsonwebtoken';
import ApiError from './ApiError.js';

export default class JwtError extends ApiError {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static catchInvalidJwt(err) {
        if (!(err instanceof jwt.JsonWebTokenError)) {
            return;
        }

        throw this.badRequest('Invalid refresh token');
    }

    static catchExpiredJwt(err) {
        if (!(err instanceof jwt.TokenExpiredError)) {
            return;
        }

        throw this.badRequest('Refresh token expired');
    }
}
