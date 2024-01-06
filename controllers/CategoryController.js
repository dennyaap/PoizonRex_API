import { Category } from '../models/models.js';
import ApiError from '../error/ApiError.js';
import { matchedData } from 'express-validator';

class CategoryController {
    async create(req, res) {
        try {
            const { name } = matchedData(req);
            const category = await Category.create({ name });

            return res.json(category);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to create category'));
        }
    }

    async getAll(req, res) {
        try {
            const categories = await Category.findAll();
            return res.json(categories);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to get categories'));
        }
    }

    async remove(req, res, next) {
        try {
            const { id } = matchedData(req);
            const category = await Category.findOne({ where: { id } });

            if (category) {
                await Category.destroy({ where: { id } });

                return res.json(category);
            }

            return next(ApiError.badRequest('there is no category with this id'));
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to remove category'));
        }
    }

    async update(req, res) {
        try {
            const { id, name } = matchedData(req);
            const category = await Category.update({ where: { id } }, { name });

            return res.json(category);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to update category'));
        }
    }
}

export default new CategoryController();
