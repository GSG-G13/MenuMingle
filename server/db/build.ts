import sequelize from './config/connection';
import config from '../config/environment';
import { Dish, Category, Staff, Customer, Role, Cart, Order } from '../models';
const { nodeEnv } = config.env;
const buildModels = async () => {
  await Dish.sync({ alter: true });
  await Category.sync({ alter: true });
  await Customer.sync({ alter: true });
  await Cart.sync({ alter: true });
  await Order.sync({ alter: true });
  await Role.sync({ alter: true });
  await Staff.sync({ alter: true });
  await sequelize.sync({ alter: true });
};

if (nodeEnv !== 'test') {
  buildModels().then(() => {
    console.log(sequelize.models);
  });
}
