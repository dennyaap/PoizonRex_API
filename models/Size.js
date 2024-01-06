import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

export const Size = sequelize.define('size', {
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

export default Size;
