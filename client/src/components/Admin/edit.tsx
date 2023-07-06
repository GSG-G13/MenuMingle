import { useMutation } from '@tanstack/react-query';
import { FC, useState } from 'react';
import axios from 'axios';
import { Alert } from '@mui/material';
import DishForm from './form';
import { EditDishProps, DishType } from '../../utils';
import Loader from '../loader';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const updateDish = async (id: number, updatedDish: DishType) => {
  const response = await axios.put(
    `${serverUrl}/api/v1/dishes/update/${id}`,
    updatedDish,
    {
      withCredentials: true,
    },
  );
  return response.data;
};

const EditDish: FC<EditDishProps> = ({ dishToUpdate, setOpen, refetch }) => {
  const [success, setSuccess] = useState(false);

  const { mutate, isError, isLoading } = useMutation(
    (updatedDish: DishType) => updateDish(3, updatedDish),
    {
      onSuccess: () => {
        setSuccess(true);
      },
    },
  );

  const handleSubmit = (updatedDish: DishType) => {
    mutate(updatedDish);
    setOpen(false);
    refetch();
  };
  if (success) {
    return <Alert severity="success">This is a success alert — check it out!</Alert>;
  }

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <span>there is Error in life</span>}
      <DishForm onSubmit={handleSubmit} dishToUpdate={dishToUpdate} />
    </div>
  );
};

export default EditDish;
