import Dishes from './dishes';
import Categories from './categories';

Dishes.hasOne(Categories);
Categories.belongsTo(Dishes);

export { Dishes, Categories };
