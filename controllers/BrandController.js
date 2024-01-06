import { matchedData } from 'express-validator';
import { Brand } from '../models/models.js';
import ApiError from '../error/ApiError.js';

class BrandController {
    async create(req, res) {
        try {
            const { name } = matchedData(req);
            const brand = await Brand.create({ name });

            return res.json(brand);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to create brand'));
        }
    }

    async getAll(req, res, next) {
        try {
            const brands = await Brand.findAll();
            return res.json(brands);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to get brands'));
        }
    }

    async remove(req, res, next) {
        try {
            const { id } = matchedData(req);
            const brand = await Brand.findOne({ where: { id } });

            if (brand) {
                await Brand.destroy({ where: { id } });

                return res.json(brand);
            }

            return next(ApiError.badRequest('there is no brand with this id'));
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to remove brand'));
        }
    }

    async update(req, res) {
        try {
            const { id, name } = matchedData(req);
            const brand = await Brand.update({ where: { id } }, { name });

            return res.json(brand);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to update brand'));
        }
    }
}

export default new BrandController();
