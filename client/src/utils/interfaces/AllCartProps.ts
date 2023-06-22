import { Dispatch, SetStateAction } from 'react';
import DishType from './DishType';

interface AllCartProps {
  menu: DishType[];
  setMenu: Dispatch<SetStateAction<DishType[]>>;
}
export default AllCartProps;
