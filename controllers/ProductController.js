import { Product } from '../models/models.js';
// import ApiError from '../error/ApiError.js';

class ProductController {
    async create(req, res) {
        const { title, price, discount, gender, amount, image } = req.body;
        const product = await Product.create({ title, price, discount, gender, amount, image });

        return res.json(product);
    }

    async getAll(req, res) {
        const products = await Product.findAll();
        return res.json(products);
    }
}

export default new ProductController();
