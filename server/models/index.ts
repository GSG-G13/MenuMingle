import Dishes from './dishes';
import Categories from './categories';
import Staff from './staff';
import Customer from './customers';

Dishes.hasOne(Categories);
Categories.belongsTo(Dishes);

export { Dishes, Categories, Staff, Customer };
