import { matchedData } from 'express-validator';
import Favorite from '../models/Favorite.js';
import ApiError from '../error/ApiError.js';

class FavoriteController {
    async create(req, res, next) {
        const user = req.user;
        const { productId } = matchedData(req);

        let favorite = await Favorite.findOne({ userId: user.id, productId });

        if (!favorite) {
            favorite = await Favorite.create({ userId: user.id, productId });
            return res.json(favorite);
        }

        return next(ApiError.badRequest('a product with this id already exists in your favorites'));
    }

    async getAll(req, res) {
        const user = req.user;
        const favoriteProducts = await Favorite.findAll({ where: { userId: user.id } });

        return res.json(favoriteProducts);
    }

    async remove(req, res, next) {
        const user = req.user;
        const { productId } = matchedData(req);

        const favoriteProduct = await Favorite.findOne({
            where: { userId: user.id, productId },
        });

        if (favoriteProduct) {
            await Favorite.destroy({ where: { userId: user.id, productId } });

            return res.json(favoriteProduct);
        }
        return next(ApiError.badRequest('there is no product with this id'));
    }
}

export default new FavoriteController();
