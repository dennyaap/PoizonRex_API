import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    discount: {
        type: DataTypes.INTEGER,
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

export const ProductContent = sequelize.define('productContent', {
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

export const Content = sequelize.define('content', {
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

export const Color = sequelize.define('color', {
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

export const Brand = sequelize.define('brand', {
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

export const Image = sequelize.define('image', {
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

export const ViewedProduct = sequelize.define('viewedProduct', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

export const Favorite = sequelize.define('favorite', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

export const Cart = sequelize.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

export const Order = sequelize.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

export const OrderContent = sequelize.define('orderContent', {
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

export const OrderStatus = sequelize.define('orderStatus', {
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

export const Delivery = sequelize.define('delivery', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    patronymic: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isMain: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

export const DeliveryType = sequelize.define('deliveryType', {
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

// Product
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

User.hasMany(ViewedProduct);
ViewedProduct.belongsTo(User);

User.hasMany(Favorite);
Favorite.belongsTo(User);

User.hasMany(Cart);
Cart.belongsTo(User);

Order.hasMany(OrderContent);
OrderContent.belongsTo(Order);

OrderStatus.hasMany(Order);
Order.belongsTo(OrderStatus);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Delivery);
Delivery.belongsTo(User);

DeliveryType.hasMany(Delivery);
Delivery.belongsTo(DeliveryType);

Delivery.hasMany(Order);
Order.belongsTo(Delivery);
