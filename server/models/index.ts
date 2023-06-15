import Dishes from './dishes';
import Categories from './categories';
import Staff from './staff';
import Customer from './customers';
import Roles from './roles';
import Cart from './cart';
import Order from './order';

Dishes.belongsTo(Categories, { foreignKey: 'category_id' });
Categories.hasMany(Dishes, { foreignKey: 'category_id', sourceKey: 'id' });

Order.belongsTo(Dishes, { foreignKey: 'dish_id' });
Dishes.hasMany(Order, { foreignKey: 'dish_id', sourceKey: 'id' });

Order.belongsTo(Customer, { foreignKey: 'customer_id' });
Customer.hasMany(Order, { foreignKey: 'customer_id', sourceKey: 'id' });

Order.belongsTo(Cart, { foreignKey: 'cart_id' });
Cart.hasMany(Order, { foreignKey: 'cart_id', sourceKey: 'id' });

Staff.belongsTo(Roles, { foreignKey: 'role_id' });
Roles.hasMany(Staff, { foreignKey: 'role_id', sourceKey: 'id' });

export { Dishes, Categories, Staff, Customer, Roles, Cart, Order };
