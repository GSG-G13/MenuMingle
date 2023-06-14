import sequelize from './config/connection';
import config from '../config/environment';
import {
  Dishes,
  Categories,
  Staff,
  Customer,
  Roles,
  Cart,
  Order,
} from '../models';
const { nodeEnv } = config.env;
const buildModels = async () => {
  await Dishes.sync({ alter: true });
  await Categories.sync({ alter: true });
  await Customer.sync({ alter: true });
  await Cart.sync({ alter: true });
  await Order.sync({ alter: true });
  await Roles.sync({ alter: true });
  await Staff.sync({ alter: true });
  await sequelize.sync({ alter: true });
};

if (nodeEnv !== 'test') {
  buildModels().then(() => {
    console.log(sequelize.models);
  });
}
