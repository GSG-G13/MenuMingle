import Dishes from './dishes';
import Categories from './categories';
import Staff from './staff';
import Customer from './customers';
import Roles from './roles';

Dishes.hasOne(Categories);
Categories.belongsTo(Dishes);

export { Dishes, Categories, Staff, Customer, Roles };
