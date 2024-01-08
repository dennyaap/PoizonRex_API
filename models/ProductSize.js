import sequelize from '../db.js';
import { DataTypes } from 'sequelize';
import Size from './Size.js';

export const ProductSize = sequelize.define('productSize', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

Size.hasMany(ProductSize);
ProductSize.belongsTo(Size);

export default ProductSize;
