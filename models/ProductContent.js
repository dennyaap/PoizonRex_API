import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const ProductContent = sequelize.define('productContent', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default ProductContent;
