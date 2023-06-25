/* eslint-disable @typescript-eslint/prefer-as-const */
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const DishForm = ({ onSubmit, initialValue }) => {
  const [dish, setDish] = useState({
    title: initialValue.name || '',
    body: initialValue.ingredients || '',
    image: initialValue.image || '',
    price: initialValue.price || '',
  });

  const handleChangeInput = e => {
    setDish({
      ...dish,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(dish);
    setDish({
      Name: '',
      Ingredients: '',
      image: '',
      price: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={dish.name}
        onChange={handleChangeInput}
        fullWidth
        margin="normal"
        sx={{ mt: 2, borderRadius: '20%' }}
      />
      <TextField
        label="Ingredients"
        name="Ingredients"
        value={dish.ingredients}
        onChange={handleChangeInput}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Image"
        name="image"
        value={dish.image}
        onChange={handleChangeInput}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        name="price"
        value={dish.price}
        onChange={handleChangeInput}
        type="number"
        fullWidth
        margin="normal"
      />
      <Button
        type="submit"
        sx={{ border: '1px solid black', textTransform: 'none', marginTop: '20px' }}
      >
        Submit
      </Button>
    </form>
  );
};

export default DishForm;
