import { dishSeedData, categorySeedData, rolesSeed } from './seedData';
import { Dish, Category, Role, sequelize } from '../models';

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await Category.bulkCreate(categorySeedData);
    await Dish.bulkCreate(dishSeedData);
    await Role.bulkCreate(rolesSeed);
  } catch (error) {
    console.error('Error creating seed data:', error);
  }
};

seedDatabase();

export default seedDatabase;
