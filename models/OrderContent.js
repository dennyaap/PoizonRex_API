import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const OrderContent = sequelize.define('orderContent', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
});

export default OrderContent;
