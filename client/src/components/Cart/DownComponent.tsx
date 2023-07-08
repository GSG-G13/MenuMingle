import * as core from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const { Button } = core;
const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
type BodyType = {
  orders: [] | null;
  note: string;
  customerId: string;
};

interface DownComponentProps {
  notes: string;
  handleClearCart: () => void;
}

const DownComponent: FC<DownComponentProps> = ({ notes, handleClearCart }) => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<[] | null>([]);
  const [customerId, setCustomerId] = useState('');

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
    const customerIdFromLocalStorage = localStorage.getItem('customerId') as string;
    setCustomerId(customerIdFromLocalStorage);
  }, []);

  const addToCart = async (reqBody: BodyType) => {
    const data = await axios.post(`${serverUrl}/api/v1/cart/add-to-cart`, reqBody);
    const neededDataInPayment = {
      cartId: data.data.cartId,
      totalPrice: data.data.price,
    };
    if (neededDataInPayment) {
      navigate('/payment', { state: neededDataInPayment });
    }
  };
  const { mutate } = useMutation({
    mutationKey: ['post'],
    mutationFn: addToCart,
  });
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
      onClick={() => {
        const body = {
          orders,
          note: notes,
          customerId,
        };
        mutate(body);
        handleClearCart();
        navigate('/payment');
      }}
    >
      Checkout
    </Button>
  );
};

export default DownComponent;
