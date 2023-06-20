import { Dispatch, SetStateAction } from 'react';

import DishType from './DishType';

interface FoodSectionProps {
  dish: DishType;
  menuState: [];
  index: number;
  setMenuState: Dispatch<SetStateAction<DishType[]>>;
}
export default FoodSectionProps;
