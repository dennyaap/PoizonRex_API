import { matchedData } from 'express-validator';
import { Product } from '../models/models.js';
import ApiError from '../error/ApiError.js';

class ProductController {
    async create(req, res, next) {
        try {
            const data = matchedData(req);
            const product = await Product.create(data);

            return res.json(product);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to create product'));
        }
    }

    async getAll(req, res, next) {
        try {
            const data = matchedData(req);
            let products = await Product.findAll({ where: data });

            return res.json(products);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to get products'));
        }
    }

    async getOne(req, res) {
        try {
            const { id } = matchedData(req);
            const product = await Product.findOne({ where: { id } });

            return res.json(product);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to get product'));
        }
    }

    async remove(req, res) {
        try {
            const { id } = matchedData(req);
            const product = await Product.destroy({ where: { id } });

            return res.json(product);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to remove product'));
        }
    }

    async update(req, res) {
        try {
            const { id } = matchedData(req, { locations: ['param'] });
            const data = matchedData(req, { locations: ['body'] });

            const product = await Product.update({ where: { id }, data });

            return res.json(product);
        } catch (err) {
            console.log(err);
            return next(ApiError.internal('failed to update product'));
        }
    }
}

export default new ProductController();
