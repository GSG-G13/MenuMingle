/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import * as core from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';

const { Typography, Stack } = core;
const obj = {
  margin: '0 !important',
  backgroundColor: '#FF7A00',
  borderRadius: '50px',
  color: '#fff',
  width: '22px',
  height: '22px',
  padding: '4px',
};

const FoodSection = ({
  ele: { name, price, id, count },
  menuState,
  setMenuState,
}) => {
  const [countNumber, setCountNumber] = useState(count);
  useEffect(() => {
    const element = menuState.find(dish => dish.id === id);
    element.count = countNumber;
    const allItems = menuState.filter(dish => dish.id !== id);
    allItems.push(element);
    const antherAllItem = allItems.filter(dish => dish.count >= 0);
    setMenuState(antherAllItem);
    localStorage.setItem('menu', JSON.stringify(menuState));
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
      <Stack>
        <img
          src="https://cdn.discordapp.com/attachments/1113720646581616660/1120246167624757249/meal.png"
          alt="alternative img"
        />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="subtitle2" component="p">
          {name}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {price}
        </Typography>
      </Stack>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          height: '5rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <RemoveIcon
          sx={obj}
          onClick={() => {
            setCountNumber(countNumber - 1);
          }}
        />

        <Typography
          variant="subtitle1"
          sx={{ margin: '0 !important', fontWeight: 'bold' }}
        >
          {countNumber}
        </Typography>
        <AddIcon
          sx={obj}
          onClick={() => {
            setCountNumber(countNumber + 1);
          }}
        />
      </Stack>
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
