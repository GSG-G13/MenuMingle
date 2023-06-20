import { useEffect, useState } from 'react';
import axios from 'axios';
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

  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/dishes');
      return response.data.data as Dish[];
    } catch (error) {
      throw new Error('Error fetching dishes');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const dishes = await fetchDishes();
      setFilteredDishes(dishes);
    };

    fetchData();
  }, []);

  const filterDishes = (categoryId: number) => {
    const filtered = filteredDishes.filter(dish => dish.categoryId === categoryId);
    setFilteredDishes(filtered);
  };

  return (
    <div style={{ width: '100%' }}>
      <Navbar />
      <FilterComponent categories={categories} onCategorySelect={filterDishes} />
      <DishList dishes={filteredDishes.length > 0 ? filteredDishes : []} />
    </div>
  );
};

export default Menu;
