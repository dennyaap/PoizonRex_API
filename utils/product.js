import { Op } from 'sequelize';
import Product from '../models/Product.js';

export const filterProductOptions = async (data, optionalValues) => {
    const name = data.name;
    const maxPrice = data.maxPrice ?? (await Product.max('price'));
    const minPrice = data.minPrice ?? 0;

    const options = { price: { [Op.between]: [minPrice, maxPrice] } };

    if (name) {
        options.name = { [Op.iLike]: `%${name}%` };
    }
    const findedOptionalValues = Object.keys(data).reduce((obj, key) => {
        if (optionalValues.includes(key)) {
            return { ...obj, [key]: data[key] };
        }
        return obj;
    }, {});

    return Object.assign(options, findedOptionalValues);
};
