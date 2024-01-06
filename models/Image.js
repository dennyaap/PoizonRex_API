import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Image = sequelize.define('image', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

export default Image;
