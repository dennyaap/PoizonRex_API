import sequelize from '../db.js';
import { DataTypes } from 'sequelize';
import User from './user.js';

export const Role = sequelize.define('role', {
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

Role.hasMany(User);
User.belongsTo(Role);

export default Role;
