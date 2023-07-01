import { useState, ChangeEvent } from 'react';
import { Button } from '@mui/material';
import TextFieldComponent from './TextFieldComponent';

const DishForm = ({ onSubmit, dishToUpdate }) => {
  const [dish, setDish] = useState(dishToUpdate);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setDish({
      ...dish,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { price, name, image, ingredients, availability } = dish;
    const dishWithoutId = { price, name, availability, image, ingredients };
    onSubmit(dishWithoutId);
  };
  const inputs = ['name', 'ingredients', 'image', 'price'];
  return (
    <form onSubmit={handleSubmit}>
      {inputs.map(input => {
        return (
          <TextFieldComponent
            dishToUpdate={dish}
            handleChangeInput={handleChangeInput}
            labelValue={input}
          />
        );
      })}
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
