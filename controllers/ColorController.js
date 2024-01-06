import { matchedData } from 'express-validator';
import ApiError from '../error/ApiError.js';
import Color from '../models/Color.js';

class ColorController {
    async create(req, res) {
        const { name } = matchedData(req);
        const color = await Color.create({ name });

        return res.json(color);
    }

    async getAll(req, res, next) {
        const colors = await Color.findAll();
        return res.json(colors);
    }

    async remove(req, res, next) {
        const { id } = matchedData(req);
        const color = await Color.findOne({ where: { id } });

        if (color) {
            await Color.destroy({ where: { id } });

            return res.json(color);
        }

        return next(ApiError.badRequest('there is no color with this id'));
    }

    async update(req, res) {
        const { id, name } = matchedData(req);
        const color = await Color.update({ where: { id } }, { name });

        return res.json(color);
    }
}

export default new ColorController();
