import { FC } from 'react';
import { FoodSection } from './index';
import { AllCartProps } from '../../utils/interfaces';

const AllCart: FC<AllCartProps> = ({ menu, setMenu }) => {
  return (
    <>
      <span>Food</span>
      {menu.map((dish, index) => (
        <FoodSection
          index={index}
          key={dish.id}
          dish={dish}
          setMenuState={setMenu}
          menuState={menu}
        />
      ))}
    </>
  );
};

export default AllCart;
