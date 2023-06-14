import { dishSeedData, categorySeedData } from './seedData';
import { Dish, Category } from '../models';

const seedDatabase = async () => {
  try {
    await Dish.bulkCreate(dishSeedData);
    await Category.bulkCreate(categorySeedData);
  } catch (error) {
    console.error('Error creating seed data:', error);
  }
};

seedDatabase();
