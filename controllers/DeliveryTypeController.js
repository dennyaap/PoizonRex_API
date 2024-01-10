import { matchedData } from 'express-validator';
import DeliveryType from '../models/DeliveryType.js';

class DeliveryTypeController {
    async create(req, res) {
        const { name } = matchedData(req);
        const deliveryType = await DeliveryType.create({ name });

        return res.json(deliveryType);
    }

    async getAll(req, res) {
        const deliveryTypes = await DeliveryType.findAll();

        return res.json(deliveryTypes);
    }

    async remove(req, res, next) {
        const { id } = matchedData(req);
        const deliveryType = await DeliveryType.findOne({ where: { id } });

        if (deliveryType) {
            await DeliveryType.destroy({ where: { id } });

            return res.json(deliveryType);
        }
        return next(ApiError.badRequest('there is no delivery type with this id'));
    }

    async update(req, res, next) {
        const { id, name } = matchedData(req);

        let deliveryType = await DeliveryType.findOne({ where: { id } });

        if (deliveryType) {
            deliveryType = await DeliveryType.update({ where: { id } }, { name });

            return res.json(deliveryType);
        }
        return next(ApiError.badRequest('there is no delivery type with this id'));
    }
}

export default new DeliveryTypeController();
