import { matchedData } from 'express-validator';
import Size from '../models/Size.js';

class SizeController {
    async create(req, res) {
        const { name } = matchedData(req);
        const sizes = await Size.create({ name });

        return res.json(sizes);
    }

    async getAll(req, res, next) {
        const sizes = await Size.findAll();
        return res.json(sizes);
    }

    async remove(req, res, next) {
        const { id } = matchedData(req);
        const size = await Size.findOne({ where: { id } });

        if (size) {
            await Size.destroy({ where: { id } });

            return res.json(size);
        }
    }

    async update(req, res) {
        const { id, name } = matchedData(req);
        const size = await Size.update({ where: { id } }, { name });

        return res.json(size);
    }
}

export default new SizeController();
