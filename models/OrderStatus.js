import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const OrderStatus = sequelize.define('orderStatus', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

export default OrderStatus;
