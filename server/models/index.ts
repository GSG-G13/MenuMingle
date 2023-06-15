import Category from './categories';
import Staff from './staff';
import Customer from './customers';
import Role from './roles';
import Cart from './cart';
import Order from './order';
import Dish from './dishes';
import sequelize from '../db/connection';

Dish.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Dish, { foreignKey: 'categoryId', sourceKey: 'id' });

Order.belongsTo(Dish, { foreignKey: 'dishId' });
Dish.hasMany(Order, { foreignKey: 'dishId', sourceKey: 'id' });

Order.belongsTo(Customer, { foreignKey: 'customerId' });
Customer.hasMany(Order, { foreignKey: 'customerId', sourceKey: 'id' });

Order.belongsTo(Cart, { foreignKey: 'cartId' });
Cart.hasMany(Order, { foreignKey: 'cartId', sourceKey: 'id' });

Staff.belongsTo(Role, { foreignKey: 'roleId' });
Role.hasMany(Staff, { foreignKey: 'roleId', sourceKey: 'id' });

export { sequelize, Dish, Category, Staff, Customer, Role, Cart, Order };
