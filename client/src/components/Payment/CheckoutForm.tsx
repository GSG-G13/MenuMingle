import { useState, useEffect, FormEvent } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';

import { useMutation } from '@tanstack/react-query';

import './form.css';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
type BodyType = {
  orders: [] | null;
  note: string;
  customerId: string;
};
const CheckoutForm = () => {
  const [orders, setOrders] = useState<[] | null>([]);
  const [notes, setNotes] = useState('');
  const [customerId, setCustomerId] = useState('');
  const navigate = useNavigate();

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
    const noteFromLocalStorage = localStorage.getItem('note') as string;
    setNotes(noteFromLocalStorage);
    const customerIdFromLocalStorage = localStorage.getItem('customerId') as string;
    setCustomerId(customerIdFromLocalStorage);
  }, []);

  const addToCart = async (reqBody: BodyType) => {
    const data = await axios.post(`${serverUrl}/api/v1/cart/add-to-cart`, reqBody);
    navigate('/waiting-room', { state: data.data.cartId });
  };
  const { mutate } = useMutation({
    mutationKey: ['post'],
    mutationFn: addToCart,
  });

  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      <Alert severity="error">This is an error alert — check it out!</Alert>;
    } else if (paymentIntent.status === 'succeeded') {
      const body = {
        orders,
        note: notes,
        customerId,
      };
      mutate(body);
    }
    setIsProcessing(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={isProcessing} id="submit">
        <span id="button-text">{isProcessing ? 'Processing...' : 'Pay Now'}</span>
      </button>
    </form>
  );
};

export default CheckoutForm;
