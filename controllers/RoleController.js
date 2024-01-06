import { matchedData } from 'express-validator';
import ApiError from '../error/ApiError.js';
import Role from '../models/Role.js';
// import ApiError from '../error/ApiError.js';

class RoleController {
    async create(req, res) {
        const { name } = matchedData(req);
        const role = await Role.create({ name });

        return res.json(role);
    }

    async getAll(req, res, next) {
        const roles = await Role.findAll();
        return res.json(roles);
    }

    async remove(req, res, next) {
        const { id } = matchedData(req);
        const role = await Role.findOne({ where: { id } });

        if (role) {
            await Role.destroy({ where: { id } });

            return res.json(role);
        }

        return next(ApiError.badRequest('there is no role with this id'));
    }

    async update(req, res) {
        const { id, name } = matchedData(req);
        const role = await Role.update({ where: { id } }, { name });

        return res.json(role);
    }
}

export default new RoleController();
