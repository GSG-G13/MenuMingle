/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  dishSeedData,
  categorySeedData,
  staffSeedData,
  customersSeedData,
  rolesSeed,
} from './seedData';
import { Dishes, Categories, Customer, Staff } from '../models';
import Roles from '../models/roles';

const seedDatabase = async () => {
  try {
    const createdDishes = await Dishes.bulkCreate(dishSeedData);
    const createdCategories = await Categories.bulkCreate(categorySeedData);
    const createStaff = await Staff.bulkCreate(staffSeedData);
    const createCustomers = await Customer.bulkCreate(customersSeedData);
    const createRoles = await Roles.bulkCreate(rolesSeed);
    console.log('Seed data created successfully!');
  } catch (error) {
    console.error('Error creating seed data:', error);
  }
};

seedDatabase();
