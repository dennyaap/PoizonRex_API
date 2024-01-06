import sequelize from '../db.js';
import { DataTypes } from 'sequelize';
import Order from './Order.js';
import DeliveryType from './DeliveryType.js';

const Delivery = sequelize.define('delivery', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    patronymic: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isMain: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

Delivery.hasMany(Order);
Order.belongsTo(Delivery);

DeliveryType.hasMany(Delivery);
Delivery.belongsTo(DeliveryType);

export default Delivery;