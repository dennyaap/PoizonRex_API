import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    discount: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['m', 'f'],
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    image: {
        type: DataTypes.STRING,
    },
});

export const Category = sequelize.define('category', {
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

Category.hasMany(Product);
Product.belongsTo(Category);
