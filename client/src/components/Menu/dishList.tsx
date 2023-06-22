import React from 'react';
import { Grid } from '@mui/material';
import DishCard from './dish';

type Dish = {
  id: number;
  name: string;
  price: number;
  image: string;
  availability: boolean;
  ingredients: string;
  count: number;
  category_id: number;
};

type DishListProps = {
  dishes: Dish[];
  cat: number;
};

const DishList: React.FC<DishListProps> = ({ dishes, cat }) => {
  return (
    <Grid container spacing={2} style={{ marginTop: '20px' }}>
      {dishes
        // eslint-disable-next-line array-callback-return, consistent-return
        .filter(el => {
          if (el.category_id === cat || cat === 0) {
            return el;
          }
        })
        .map(dishItem => (
          <Grid item key={dishItem.id} xs={13} sm={4} md={3} lg={2}>
            <DishCard dish={dishItem} />
          </Grid>
        ))}
    </Grid>
  );
};

export default DishList;
