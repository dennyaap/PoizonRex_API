import ApiError from '../error/ApiError.js';
import FileMiddleware from '../middleware/FileMiddleware.js';

export default [
    FileMiddleware(process.env.PRODUCT_IMAGES_PATH).array('images', 20),
    (req, res, next) => {
        const files = req.files;

        if (files?.length) {
            const images = files.map((file) => ({ name: file.filename }));
            req.images = images;

            return next();
        }

        return next(ApiError.badRequest('images field is empty'));
    },
];
