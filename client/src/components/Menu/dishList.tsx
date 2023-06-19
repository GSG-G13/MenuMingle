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
  categoryId: number;
};

type DishListProps = {
  dishes: Dish[];
};

const DishList: React.FC<DishListProps> = ({ dishes }) => {
  return (
    <Grid container spacing={2} style={{ marginTop: '20px' }}>
      {dishes.map(dishItem => (
        <Grid item key={dishItem.id} xs={13} sm={4} md={3} lg={2}>
          <DishCard dish={dishItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DishList;
