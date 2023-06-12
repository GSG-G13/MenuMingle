import Dishes from './dishes';
import Categories from './categories';
import Staff from './staff';
import Customer from './customers';
import Roles from './roles';
import Cart from './cart';
import Order from './order';

Dishes.belongsTo(Categories);
Categories.hasMany(Dishes);

Order.belongsTo(Dishes);
Dishes.hasMany(Order);

Order.belongsTo(Customer);
Customer.hasMany(Order);

Order.belongsTo(Cart);
Cart.hasMany(Order);

Staff.belongsTo(Roles);
Roles.hasMany(Staff);

export { Dishes, Categories, Staff, Customer, Roles, Cart, Order };
