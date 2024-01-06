import { Category } from '../models/models.js';
import ApiError from '../error/ApiError.js';
import { matchedData } from 'express-validator';

class CategoryController {
    async create(req, res) {
        const { name } = matchedData(req);
        const category = await Category.create({ name });

        return res.json(category);
    }

    async getAll(req, res) {
        const categories = await Category.findAll();
        return res.json(categories);
    }

    async remove(req, res, next) {
        const { id } = matchedData(req);
        const category = await Category.findOne({ where: { id } });

        if (category) {
            await Category.destroy({ where: { id } });

            return res.json(category);
        }

        return next(ApiError.badRequest('there is no category with this id'));
    }

    async update(req, res) {
        const { id, name } = matchedData(req);
        const category = await Category.update({ where: { id } }, { name });

        return res.json(category);
    }
}

export default new CategoryController();
