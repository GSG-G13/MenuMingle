/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CheckoutForm from './CheckoutForm';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const Payment = () => {
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);
  const [clientSecret, setClientSecret] = useState<string | ''>('');
  // const [amount, setAmount] = useState(100);
  // const location = useLocation();
  // const { state } = location;

  const sendConfig = async () => {
    const response = await axios.get(`${serverUrl}/config`);
    const { publishableKey } = response.data;
    setStripePromise(await loadStripe(publishableKey));
  };
  // if (state) {
  //   setAmount(state.totalPrice);
  // }
  const createPaymentIntent = async () => {
    // setAmount(state.totalPrice);
    const response = await axios.post(`${serverUrl}/create-payment-intent`, {
      amount: 100,
    });
    const { clientSecret } = await response.data;
    setClientSecret(clientSecret);
  };

  useEffect(() => {
    sendConfig();
    createPaymentIntent();
  }, []);

  return (
    <div>
      <h1>Payment</h1>
      {clientSecret && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
