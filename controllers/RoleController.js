import { matchedData } from 'express-validator';
import { Category, Role } from '../models/models.js';
import ApiError from '../error/ApiError.js';
// import ApiError from '../error/ApiError.js';

class RoleController {
    async create(req, res) {
        try {
            const { name } = matchedData(req);
            const role = await Role.create({ name });

            return res.json(role);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to create role'));
        }
    }

    async getAll(req, res, next) {
        try {
            const roles = await Role.findAll();
            return res.json(roles);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to get roles'));
        }
    }

    async remove(req, res, next) {
        try {
            const { id } = matchedData(req);
            const role = await Role.findOne({ where: { id } });

            if (role) {
                await Role.destroy({ where: { id } });

                return res.json(role);
            }

            return next(ApiError.badRequest('there is no role with this id'));
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to remove role'));
        }
    }

    async update(req, res) {
        try {
            const { id, name } = matchedData(req);
            const role = await Role.update({ where: { id } }, { name });

            return res.json(role);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to update role'));
        }
    }
}

export default new RoleController();
