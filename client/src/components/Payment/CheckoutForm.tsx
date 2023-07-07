import { useState, FormEvent } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Alert } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import './form.css';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

type updateCartStatusParma = {
  cartId: string;
  status: string;
};

const updateCartStatus = async ({ cartId, status }: updateCartStatusParma) => {
  await axios.put(
    `${serverUrl}/api/v1/cart/update-cart?cartId=${cartId}&cartStatus=${status}`,
  );
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { state } = location;
  const { mutate } = useMutation(updateCartStatus);
  const gotWittingRoom = useNavigate();
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
      mutate({ cartId: state.cartId, status: 'inprogress' });
      gotWittingRoom('/waiting-room', { state });
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
