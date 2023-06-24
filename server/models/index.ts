import Category from './categories';
import Staff from './staff';
import Role from './roles';
import Cart from './cart';
import Order from './order';
import Dish from './dishes';
import sequelize from '../db/connection';

Dish.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Dish, { foreignKey: 'category_id', sourceKey: 'id' });

Order.belongsTo(Dish, { foreignKey: 'dish_id' });
Dish.hasMany(Order, { foreignKey: 'dish_id', sourceKey: 'id' });

Order.belongsTo(Cart, { foreignKey: 'cart_id' });
Cart.hasMany(Order, { foreignKey: 'cart_id', sourceKey: 'id' });

Staff.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(Staff, { foreignKey: 'role_id', sourceKey: 'id' });

export { sequelize, Dish, Category, Staff, Role, Cart, Order };
