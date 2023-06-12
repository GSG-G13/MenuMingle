/* eslint-disable @typescript-eslint/no-unused-vars */
import { dishSeedData, categorySeedData } from './seedData';
import staffsSeedData from './seedData/staffSeedData';
import customersSeedData from './seedData/customersSeedData';
import { Dishes, Categories, Customer, Staff } from '../models';

const seedDatabase = async () => {
  try {
    const createdDishes = await Dishes.bulkCreate(dishSeedData);
    const createdCategories = await Categories.bulkCreate(categorySeedData);
    const createStaff = await Customer.bulkCreate(staffsSeedData);
    const createCustomers = await Customer.bulkCreate(customersSeedData);
    console.log('Seed data created successfully!');
  } catch (error) {
    console.error('Error creating seed data:', error);
  }
};

seedDatabase();
