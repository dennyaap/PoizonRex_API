import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

export const ViewedProduct = sequelize.define('viewedProduct', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

export default ViewedProduct;
