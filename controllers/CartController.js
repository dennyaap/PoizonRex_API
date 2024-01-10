import { matchedData } from 'express-validator';
import Cart from '../models/Cart.js';
import ApiError from '../error/ApiError.js';
import Product from '../models/Product.js';

class CartController {
    async create(req, res, next) {
        const user = req.user;
        const { productId } = matchedData(req);

        let productCart = await Cart.findOne({ where: { userId: user.id, productId } });

        if (!productCart) {
            productCart = await Cart.create({ userId: user.id, productId });
            return res.json(productCart);
        }

        return next(ApiError.badRequest('a product with this id already exists in your cart'));
    }

    async getAll(req, res) {
        const user = req.user;
        const cartProducts = await Cart.findAll({ where: { userId: user.id } });

        return res.json(cartProducts);
    }

    async remove(req, res, next) {
        const user = req.user;
        const { productId } = matchedData(req);

        const productCart = await Cart.findOne({
            where: { userId: user.id, productId },
        });

        if (productCart) {
            await productCart.destroy({ where: { userId: user.id, productId } });

            return res.json(productCart);
        }
        return next(ApiError.badRequest('there is no product with this id in the cart'));
    }

    async increase(req, res, next) {
        const user = req.user;
        const { productId } = matchedData(req);

        let productCart = await Cart.findOne({
            where: {
                userId: user.id,
                productId,
            },
        });

        if (productCart) {
            const product = await Product.findOne({
                where: {
                    id: productId,
                },
            });

            const productAmount = product.amount;
            const productCartCount = productCart.count;

            if (productCartCount + 1 <= productAmount) {
                productCart = await productCart.increment('count');

                return res.json(productCart);
            }

            return next(ApiError.badRequest('not enough product in stock'));
        }
        return next(ApiError.badRequest('there is no product with this id'));
    }

    async decrease(req, res, next) {
        const user = req.user;
        const { productId } = matchedData(req);

        let productCart = await Cart.findOne({
            where: {
                userId: user.id,
                productId,
            },
        });

        if (productCart) {
            const productCartCount = productCart.count;

            if (productCartCount - 1 > 0) {
                productCart = await productCart.decrement('count');

                return res.json(productCart);
            }

            return next(ApiError.badRequest('count of product cannot be less than zero'));
        }
        return next(ApiError.badRequest('there is no product with this id'));
    }
}

export default new CartController();
