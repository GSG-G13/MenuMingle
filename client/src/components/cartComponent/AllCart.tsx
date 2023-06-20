import { useEffect, useState } from 'react';
import FoodSection from './FootSection';

const dishSeedData = [
  {
    id: 1,
    name: 'Mango Juice',
    price: 12,
    image: 'mango.jpg',
    availability: true,
    ingredients: 'Mango, Sugar',
    category_id: 1,
    count: 0,
  },
  {
    id: 2,
    name: 'Grape leaves',
    price: 16.55,
    image: 'grapeleaves.jpg',
    availability: true,
    ingredients: 'Rice, Grape Leaves, OliveOil, Lemon',
    category_id: 2,
    count: 0,
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    price: 18.99,
    image: 'grilled_salmon.jpg',
    availability: true,
    ingredients: 'Salmon, Lemon, Olive Oil, Dill',
    category_id: 2,
    count: 0,
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    price: 7.99,
    image: 'chocolate_lava_cake.jpg',
    availability: true,
    ingredients: 'Chocolate, Butter, Sugar, Eggs',
    category_id: 1,
    count: 0,
  },
  {
    id: 5,
    name: 'Caesar Salad',
    price: 9.99,
    image: 'caesar_salad.jpg',
    availability: true,
    ingredients: 'Romaine Lettuce, Parmesan Cheese, Croutons, Caesar Dressing',
    category_id: 2,
    count: 0,
  },
];

const AllCart = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    // localStorage.setItem('menu', JSON.stringify(dishSeedData));
    const data = JSON.parse(localStorage.getItem('menu'));
    setMenu(data);
  }, []);

  return (
    <>
      {menu.map((dish, index) => (
        <FoodSection
          index={index}
          key={dish.id}
          ele={dish}
          menuState={menu}
          setMenuState={setMenu}
        />
      ))}
    </>
  );
};

export default AllCart;
