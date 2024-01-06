import { matchedData } from 'express-validator';

import ApiError from '../error/ApiError.js';
import User from '../models/user.js';

import { generateJwt, getUserParameter } from '../utils/auth.js';
import { roles } from '../config/roles.js';

const findUser = (queryId) => {
    return User.findOne({ where: { queryId } });
};
class UserController {
    async registration(req, res, next) {
        const data = matchedData(req);
        const queryId = getUserParameter(data.initData, 'query_id');

        if (await findUser(queryId)) {
            return next(ApiError.badRequest('This user already exists'));
        }
        const user = await User.create({ queryId, roleId: roles.USER });

        const token = generateJwt(user.id, user.roleId);

        return res.json({ token });
    }

    async login(req, res, next) {
        const data = matchedData(req);
        const queryId = getUserParameter(data.initData, 'query_id');

        const user = await findUser(queryId);

        if (!user) {
            return next(ApiError.notFound('User is not found'));
        }

        const token = generateJwt(user.id, user.roleId);

        return res.json({ token });
    }
}

export default new UserController();
