/* eslint-disable @typescript-eslint/no-unused-vars */
import { dishSeedData, categorySeedData } from './seedData';
import staffsSeedData from './seedData/staffSeedData';
import customersSeedData from './seedData/customersSeedData';
import { Dishes, Categories, Customer, Staff } from '../models';

const seedDatabase = async () => {
  try {
    const createdDishes = await Dishes.bulkCreate(dishSeedData);
    const createdCategories = await Categories.bulkCreate(categorySeedData); // i kept them inside a variable cause we might need them later
    const createStaff = await Customer.bulkCreate(staffsSeedData);
    const createCustomers = await Customer.bulkCreate(customersSeedData);

  } catch (error) {
    console.error('Error creating seed data:', error);
  }
};

seedDatabase();
