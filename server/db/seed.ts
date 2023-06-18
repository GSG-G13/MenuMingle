import { dishSeedData, categorySeedData, rolesSeed } from './seedData';
import { Dish, Category, Role, sequelize } from '../models';
import configs from '../config/environment';

const { nodeEnv } = configs.env;

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true, logging: false });

    await Category.bulkCreate(categorySeedData, { logging: false });
    await Dish.bulkCreate(dishSeedData, { logging: false });
    await Role.bulkCreate(rolesSeed, { logging: false });
  } catch (error) {
    console.error('Error creating seed data:', error);
  }
};

if (nodeEnv !== 'test') {
  seedDatabase();
}

export default seedDatabase;
