import { matchedData } from 'express-validator';
import { Color } from '../models/models.js';
import ApiError from '../error/ApiError.js';

class ColorController {
    async create(req, res) {
        try {
            const { name } = matchedData(req);

            const color = await Color.create({ name });

            return res.json(color);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to create color'));
        }
    }

    async getAll(req, res, next) {
        try {
            const colors = await Color.findAll();
            return res.json(colors);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to get colors'));
        }
    }

    async remove(req, res, next) {
        try {
            const { id } = matchedData(req);
            const color = await Color.findOne({ where: { id } });

            if (color) {
                await Color.destroy({ where: { id } });

                return res.json(color);
            }

            return next(ApiError.badRequest('there is no color with this id'));
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to remove color'));
        }
    }

    async update(req, res) {
        try {
            const { id, name } = matchedData(req);
            const color = await Color.update({ where: { id } }, { name });

            return res.json(color);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to update color'));
        }
    }
}

export default new ColorController();
