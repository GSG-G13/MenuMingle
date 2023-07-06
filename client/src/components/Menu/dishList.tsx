import React from 'react';
import { Grid } from '@mui/material';
import DishCard from './dish';

import { DishListProps } from '../../utils/interfaces';

const DishList: React.FC<DishListProps> = ({ dishes, cat }) => {
  return (
    <Grid container style={{ marginTop: '20px' }}>
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
