/* eslint-disable consistent-return */
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import DishList from '../components/Menu/dishList';
import FilterComponent from '../components/Menu/filter';
import Navbar from '../components/Menu/Nav';

import { Category, Dish } from '../utils/interfaces';
import Loader from '../components/loader';
import ErrorPage from '../components/Error';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

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

const Menu = () => {
  const [cat, setCat] = useState<number>(0);
  const [dishes, setDishes] = useState<Dish[]>([]);

  const fetchDishes = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/v1/dishes`, {
        withCredentials: true,
      });
      setDishes(response.data.data);
      return response.data.data as Dish[];
    } catch (error) {
      throw new Error('Error fetching dishes');
    }
  };

  const { isLoading, isError } = useQuery({
    queryKey: ['dishes'],
    queryFn: fetchDishes,
  });

  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;

  return (
    <div style={{ width: '100%' }}>
      <Navbar />
      <FilterComponent
        categories={categories}
        onCategorySelect={e => {
          setCat(e);
        }}
      />
      {dishes && <DishList dishes={dishes} cat={cat} />}
    </div>
  );
};

export default Menu;
