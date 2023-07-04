import { useState, useEffect } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useMutation } from '@tanstack/react-query';

import './form.css';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
type BodyType = {
  orders: [] | null;
  note: string;
  customerId: number;
};

const CheckoutForm = () => {
  const [orders, setOrders] = useState<[] | null>([]);
  const [notes, setNotes] = useState('');

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
  }, []);
  const { mutate } = useMutation({
    mutationKey: ['post'],
    mutationFn: (reqBody: BodyType) =>
      axios.post(`${serverUrl}/api/v1/cart/add-to-cart`, reqBody),
  });
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
      // 4242 4242 4242 4242
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      setMessage(`Payment failed: ${error.message}`);
      console.log('Error', error.message);
    } else if (paymentIntent.status === 'succeeded') {
      const body = {
        orders,
        note: notes,
        customerId: 123456,
      };
      mutate(body);
      navigate('/waiting-room');
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
