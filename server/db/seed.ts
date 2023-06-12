/* eslint-disable @typescript-eslint/no-unused-vars */
import { dishSeedData, categorySeedData } from './seedData';
import { Dishes, Categories } from '../models';

const seedDatabase = async () => {
  try {
    const createdDishes = await Dishes.bulkCreate(dishSeedData);

    const createdCategories = await Categories.bulkCreate(categorySeedData);

    console.log('Seed data created successfully!');
  } catch (error) {
    console.error('Error creating seed data:', error);
  }
};

seedDatabase();
