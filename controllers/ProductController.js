import { Product } from '../models/models.js';
import { findFilterFields } from '../utils/controller.js';
// import ApiError from '../error/ApiError.js';

class ProductController {
    async create(req, res) {
        const { title, price, discount, gender, amount, image, categoryId } = req.body;
        const product = await Product.create({
            title,
            price,
            discount,
            gender,
            amount,
            image,
            categoryId,
        });

        return res.json(product);
    }

    async getAll(req, res) {
        const params = req.query;
        const optionalParams = ['categoryId'];
        const filterFields = findFilterFields(params, optionalParams);

        let products = await Product.findAll({ where: filterFields });

        return res.json(products);
    }
}

export default new ProductController();
