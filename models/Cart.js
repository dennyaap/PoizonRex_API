import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Cart = sequelize.define('cart', {
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

export default Cart;
