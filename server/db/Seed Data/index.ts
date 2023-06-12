import { Dishes } from '../../models';
import { Categories } from '../../models';

const dishSeedData = [
  {
    name: 'Mango Juice',
    price: 12,
    image: 'mango.jpg',
    availability: true,
    ingredients: 'Mango, Sugar',
    categoryId: 1,
  },
  {
    name: 'Grape leaves',
    price: 16.55,
    image: 'grapeleaves.jpg',
    availability: true,
    ingredients: 'Rice, Grape Leaves, OliveOil, Lemon',
    categoryId: 2,
  },
  {
    name: 'Grilled Salmon',
    price: 18.99,
    image: 'grilled_salmon.jpg',
    availability: true,
    ingredients: 'Salmon, Lemon, Olive Oil, Dill',
    categoryId: 3,
  },
  {
    name: 'Chocolate Lava Cake',
    price: 7.99,
    image: 'chocolate_lava_cake.jpg',
    availability: true,
    ingredients: 'Chocolate, Butter, Sugar, Eggs',
    categoryId: 4,
  },
  {
    name: 'Caesar Salad',
    price: 9.99,
    image: 'caesar_salad.jpg',
    availability: true,
    ingredients: 'Romaine Lettuce, Parmesan Cheese, Croutons, Caesar Dressing',
    categoryId: 5,
  },
];

const categorySeedData = [
  {
    name: 'Drinks',
  },
  {
    name: 'Appetizers',
  },
  {
    name: 'Main Course',
  },
  {
    name: 'Desserts',
  },
  {
    name: 'Salads',
  },
];

async function seedDatabase() {
  try {
    const createdDishes = await Dishes.bulkCreate(dishSeedData);

    const createdCategories = await Categories.bulkCreate(categorySeedData);

    console.log('Seed data created successfully!');
  } catch (error) {
    console.error('Error creating seed data:', error);
  }
}

seedDatabase();
