import { useState } from 'react';
import DishList from './dishList';
import FilterComponent from './filter';
import Navbar from './Nav';

interface Category {
  id: number;
  name: string;
}

interface Dish {
  id: number;
  name: string;
  price: number;
  image: string;
  availability: boolean;
  ingredients: string;
  count: number;
  categoryId: number;
}

const Menu = () => {
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);
  const categories: Category[] = [
    {
      id: 0,
      name: 'All',
    },
    {
      id: 1,
      name: 'Drinks',
    },
    {
      id: 2,
      name: 'Appetizers',
    },
    {
      id: 3,
      name: 'Main Course',
    },
    {
      id: 4,
      name: 'Desserts',
    },
    {
      id: 5,
      name: 'Salads',
    },
  ];

  const dishes: Dish[] = [
    {
      id: 1,
      name: 'Mango Juice',
      price: 12,
      image:
        'https://i0.wp.com/alfareshalvah.com/wp-content/uploads/2021/09/26.jpg?fit=800%2C800&ssl=1',
      availability: true,
      ingredients: 'Fruit juice, ice cubes, alphonso mangoes ',
      count: 0,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Grape leaves',
      price: 16.55,
      image:
        'https://media.zid.store/thumbs/e2938a1d-3455-432a-8f6a-adad1c044749/44252aba-5546-4e23-b150-38500551c7fb-thumbnail-500x500.png',
      availability: true,
      ingredients: 'Rice, Grape Leaves, OliveOil, Lemon',
      count: 0,
      categoryId: 2,
    },
    {
      id: 3,
      name: 'Grilled Salmon',
      price: 18.99,
      image:
        'https://www.askchefdennis.com/wp-content/uploads/2019/05/grilled-salmon-platter-10-2.jpg',
      availability: true,
      ingredients: 'Salmon, Lemon, Olive Oil, Dill',
      count: 0,
      categoryId: 3,
    },
    {
      id: 4,
      name: 'Chocolate Cake',
      price: 7.99,
      image:
        'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/39E92D31-D1AE-44DC-8B86-C60A8E6B8D05/Derivates/744B2C83-F33A-4AB5-A7DD-0D59D555D0F6.jpg',
      availability: true,
      ingredients: 'Chocolate, Butter, Sugar, Eggs',
      count: 0,
      categoryId: 4,
    },
    {
      id: 5,
      name: 'Caesar Salad',
      price: 9.99,
      image:
        'https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/1:1/w_2800,h_2800,c_limit/0328-ceasar-salad-lede.jpg',
      availability: true,
      ingredients: 'Lettuce, Parmesan, Croutons, Dressing',
      count: 0,
      categoryId: 5,
    },
  ];

  const filterDishes = (categoryId: number) => {
    const filtered = dishes.filter(dish => dish.categoryId === categoryId);
    setFilteredDishes(filtered);
  };

  return (
    <div style={{ width: '100%' }}>
      <Navbar />
      <FilterComponent categories={categories} onCategorySelect={filterDishes} />
      <DishList dishes={filteredDishes.length > 0 ? filteredDishes : dishes} />
    </div>
  );
};

export default Menu;
