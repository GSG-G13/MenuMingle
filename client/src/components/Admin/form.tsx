import { useState, ChangeEvent, FC } from 'react';
import { Button } from '@mui/material';
import TextFieldComponent from './TextFieldComponent';
import { DishFormProps } from '../../utils';

const DishForm: FC<DishFormProps> = ({ onSubmit, dishToUpdate }) => {
  const [dish, setDish] = useState(dishToUpdate);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setDish({
      ...dish,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
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
