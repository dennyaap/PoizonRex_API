import { matchedData } from 'express-validator';

import Product from '../models/Product.js';
import ViewedProduct from '../models/ViewedProduct.js';
import ProductSize from '../models/ProductSize.js';
import Image from '../models/Image.js';
import Size from '../models/Size.js';
import { filterProductOptions } from '../utils/product.js';
import { getOrderBy, calcOffset } from '../utils/filter.js';

class ProductController {
    async create(req, res) {
        const data = matchedData(req);
        const product = await Product.create(data);

        const sizes = data.sizes ?? [];

        if (sizes.length) {
            sizes.forEach(async (sizeId) => {
                await ProductSize.create({ sizeId, productId: product.id });
            });
        }

        return res.json({ ...product.dataValues, productSizes: sizes });
    }

    async getAll(req, res) {
        const data = matchedData(req);

        // Get filtered options
        const options = await filterProductOptions(data, ['categoryId', 'brandId', 'colorId']);

        // Get orderBy
        const order = getOrderBy(data.orderBy, data.sortBy);

        // Calc offset
        const maxProductLimit = process.env.MAX_PRODUCT_LIMIT;
        const limit = data.limit ?? 10;
        const page = data.page ?? 1;
        const offset = calcOffset(limit, maxProductLimit, page);

        // Get sizes
        const sizes = data.sizes ?? [];

        const products = await Product.findAll({
            where: options,
            order,
            offset,
            limit,
            include: {
                model: ProductSize,
                attributes: ['sizeId'],
                where: {
                    sizeId: sizes,
                },
            },
        });

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

    async addImages(req, res) {
        const { id } = matchedData(req);
        let images = req.images;

        if (images) {
            images = images.map(
                async (image) => await Image.create({ name: image.name, productId: id }),
            );
        }

        return res.json(images);
    }
}

export default new ProductController();
