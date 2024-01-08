import sequelize from '../db.js';
import DataTypes from 'sequelize';
import ViewedProduct from './ViewedProduct.js';
import Favorite from './Favorite.js';
import Cart from './Cart.js';
import Delivery from './Delivery.js';
import Role from './Role.js';
import Order from './Order.js';

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    queryId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

User.hasMany(ViewedProduct);
ViewedProduct.belongsTo(User);

User.hasMany(Favorite);
Favorite.belongsTo(User);

User.hasMany(Cart);
Cart.belongsTo(User);

User.hasMany(Delivery);
Delivery.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Role.hasMany(User);
User.belongsTo(Role);

export default User;
