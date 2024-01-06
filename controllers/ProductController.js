import { matchedData } from 'express-validator';
import Product from '../models/Product.js';
import ViewedProduct from '../models/ViewedProduct.js';

class ProductController {
    async create(req, res, next) {
        const data = matchedData(req);
        const product = await Product.create(data);

        return res.json(product);
    }

    async getAll(req, res, next) {
        const data = matchedData(req);
        let products = await Product.findAll({ where: data });

        return res.json(products);
    }

    async getOne(req, res) {
        const { id, userId } = matchedData(req);
        const product = await Product.findOne({ where: { id } });

        const viewedProduct = await ViewedProduct.findOne({ where: { productId: id, userId } });

        if (!viewedProduct) {
            // The user viewed the product
            await ViewedProduct.create({ productId: id, userId });
        }

        return res.json(product);
    }

    async remove(req, res) {
        const { id } = matchedData(req);
        const product = await Product.destroy({ where: { id } });

        return res.json(product);
    }

    async update(req, res) {
        const { id } = matchedData(req, { locations: ['param'] });
        const data = matchedData(req, { locations: ['body'] });

        const product = await Product.update({ where: { id }, data });

        return res.json(product);
    }
}

export default new ProductController();
