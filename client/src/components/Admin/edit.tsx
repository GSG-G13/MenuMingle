import { useMutation } from '@tanstack/react-query';
import { FC } from 'react';
import axios from 'axios';
import { Alert } from '@mui/material';
import DishForm from './form';
import { EditDishProps, DishType } from '../../utils';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const updateDish = async (id: number, updatedDish: DishType) => {
  const response = await axios.put(
    `${serverUrl}/api/v1/dishes/update/${id}`,
    updatedDish,
  );
  return response.data;
};

const EditDish: FC<EditDishProps> = ({ dishToUpdate, setOpen }) => {
  const { mutate, isError, isLoading } = useMutation(
    updatedDish => updateDish(3, updatedDish),
    {
      onSuccess: () => {
        <Alert severity="success">This is a success alert — check it out!</Alert>;
      },
    },
  );

  const handleSubmit = (updatedDish: DishType) => {
    mutate(updatedDish);
    setOpen(false);
  };

  return (
    <div>
      {isLoading && <span>there is Error in life</span>}
      {isError && <span>there is Error in life</span>}
      <DishForm onSubmit={handleSubmit} dishToUpdate={dishToUpdate} />
    </div>
  );
};

export default EditDish;
