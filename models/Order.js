import sequelize from '../db.js';
import DataTypes from 'sequelize';
import OrderContent from './OrderContent.js';
import OrderStatus from './OrderStatus.js';
import User from './user.js';

export const Order = sequelize.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Order.hasMany(OrderContent);
OrderContent.belongsTo(Order);

OrderStatus.hasMany(Order);
Order.belongsTo(OrderStatus);

export default Order;
