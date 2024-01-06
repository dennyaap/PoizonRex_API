import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Favorite = sequelize.define('favorite', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

export default Favorite;
