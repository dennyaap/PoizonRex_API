import { matchedData } from 'express-validator';
import Brand from '../models/Brand.js';

class BrandController {
    async create(req, res) {
        const { name } = matchedData(req);
        const brand = await Brand.create({ name });

        return res.json(brand);
    }

    async getAll(req, res, next) {
        const brands = await Brand.findAll();
        return res.json(brands);
    }

    async remove(req, res, next) {
        const { id } = matchedData(req);
        const brand = await Brand.findOne({ where: { id } });

        if (brand) {
            await Brand.destroy({ where: { id } });

            return res.json(brand);
        }
    }

    async update(req, res) {
        const { id, name } = matchedData(req);
        const brand = await Brand.update({ where: { id } }, { name });

        return res.json(brand);
    }
}

export default new BrandController();
