import { Op } from 'sequelize';
import Product from '../models/Product.js';

export const filterProductOptions = async (data, optionalValues) => {
    const name = data.name;
    const maxPrice = data.maxPrice;
    const minPrice = data.minPrice ?? 0;

    let productMaxPrice = maxPrice;

    if (!productMaxPrice) {
        productMaxPrice = await Product.max('price');
    }

    const options = {};

    options.price = { [Op.between]: [minPrice, productMaxPrice] };

    if (name) {
        options.name = { [Op.iLike]: `%${name}%` };
    }
    const findedOptionalValues = Object.keys(data).reduce((obj, key) => {
        if (optionalValues.includes(key)) {
            return { ...obj, [key]: data[key] };
        }
    }, {});

    return Object.assign(options, findedOptionalValues);
};
