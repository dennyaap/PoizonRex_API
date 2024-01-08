import sequelize from '../db.js';
import DataTypes from 'sequelize';
import Category from './Category.js';
import Brand from './Brand.js';
import Color from './Color.js';
import Size from './Size.js';
import ProductContent from './ProductContent.js';
import Content from './Content.js';
import ViewedProduct from './ViewedProduct.js';
import Favorite from './Favorite.js';
import Cart from './Cart.js';
import OrderContent from './OrderContent.js';
import Image from './Image.js';
import { ProductSize } from './ProductSize.js';

const Product = sequelize.define('product', {
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
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    discount: {
        type: DataTypes.FLOAT,
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['M', 'F'],
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
});

Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Color.hasMany(Product);
Product.belongsTo(Color);

Product.hasMany(Size);
Size.belongsTo(Product);

Product.hasMany(Image);
Image.belongsTo(Product);

Product.hasMany(ProductContent);
ProductContent.belongsTo(Product);

Content.hasMany(ProductContent);
ProductContent.belongsTo(Content);

Product.hasMany(ViewedProduct);
ViewedProduct.belongsTo(Product);

Product.hasMany(Favorite);
Favorite.belongsTo(Product);

Product.hasMany(Cart);
Cart.belongsTo(Product);

Product.hasMany(OrderContent);
OrderContent.belongsTo(Product);

Product.hasMany(ProductSize);
ProductSize.belongsTo(Product);

export default Product;
