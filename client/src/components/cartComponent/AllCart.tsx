import { FC } from 'react';
import { FoodSection } from './index';
import { AllCartProps } from '../../utils/interfaces';

const AllCart: FC<AllCartProps> = ({ menu, setMenu }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <span style={{ marginTop: '20px' }}>dishes</span>
      {menu?.map((dish, index) => (
        <FoodSection
          index={index}
          key={dish.id}
          dish={dish}
          setMenuState={setMenu}
          menuState={menu}
        />
      ))}
    </div>
  );
};

export default AllCart;
