import * as core from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { CssBaseline } from '@mui/material';
import { useEffect, useState, FC } from 'react';
import { DishType, FoodSectionProps } from '../../utils/interfaces';

import MiddleComponent from './MiddleComponent';
import LiftComponent from './LiftComponent';

const { Stack } = core;
const FoodSection: FC<FoodSectionProps> = ({
  dish,
  menuState,
  index,
  setMenuState,
}) => {
  const { name, price, count } = dish;
  const [countNumber, setCountNumber] = useState(count);
  useEffect(() => {
    const myEl = dish;
    myEl.count = countNumber;
    let myMen: DishType[] = menuState;
    myMen[index] = myEl;
    myMen = myMen.filter(element => element.count > 0);
    setMenuState(myMen);
    localStorage.setItem('menu', JSON.stringify(myMen));
  }, [countNumber]);
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        height: '120px',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
      }}
    >
      <CssBaseline />
      <MiddleComponent name={name} price={price} />
      <LiftComponent
        countNumber={countNumber}
        setCountNumber={setCountNumber}
      />
      <ClearIcon
        sx={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '4px',
          color: '#fff',
        }}
      />
    </Stack>
  );
};

export default FoodSection;
