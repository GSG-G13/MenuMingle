import { dishSeedData, categorySeedData } from './seedData';
import { Dishes, Categories } from '../models';

const seedDatabase = async () => {
  try {
    await Categories.bulkCreate(categorySeedData);
    await Dishes.bulkCreate(dishSeedData);
  } catch (error) {
    console.error('Error creating seed data:', error);
  }
};

seedDatabase();
