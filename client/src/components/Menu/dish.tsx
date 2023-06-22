import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';
import AddToCart from './addToCart';

import { DishCardProps } from '../../utils/interfaces';

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const { name, price, image, ingredients } = dish;

  return (
    <Card>
      <CardMedia component="img" height="150" image={image} alt={name} />
      <CardHeader title={name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {ingredients}
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>$ {price.toFixed(2)}</Typography>
          <AddToCart item={dish} />
        </div>
      </CardContent>
    </Card>
  );
};

export default DishCard;
