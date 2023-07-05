import { Button, Alert } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ButtonSectionProps, BodyType } from '../../utils';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const DownComponent = ({ notes }: ButtonSectionProps) => {
  const goToWaitingRoom = useNavigate();

  const [orders, setOrders] = useState<[] | null>([]);
  const { isError, isSuccess, mutate } = useMutation({
    mutationKey: ['post'],
    mutationFn: (reqBody: BodyType) =>
      axios.post(`${serverUrl}/api/v1/cart/add-to-cart`, reqBody),
  });
  const handleCheckout = () => {
    const body = {
      orders,
      note: notes,
      customerId: 123456,
    };
    mutate(body);
  };

  useEffect(() => {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('items') as string);
    dataFromLocalStorage = dataFromLocalStorage?.map(
      (dish: { id: number; count: number }) => {
        return {
          dish_id: dish.id,
          quantity: dish.count,
        };
      },
    );
    setOrders(dataFromLocalStorage);
  }, []);
  if (isError) {
    return <Alert severity="error">This is an error alert — check it out!</Alert>;
  }
  if (isSuccess) {
    goToWaitingRoom('payment');
  }

  return (
    <Button
      sx={{
        backgroundColor: '#FF7A00',
        width: '90%',
        margin: 'auto 20px',
        height: '45px',
        color: '#000',
        position: 'fixed',
        bottom: '10px',
      }}
      onClick={handleCheckout}
    >
      Checkout
    </Button>
  );
};

export default DownComponent;
