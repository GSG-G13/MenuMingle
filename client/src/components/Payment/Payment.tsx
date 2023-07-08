import { useEffect, useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CheckoutForm from './CheckoutForm';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const Payment = () => {
  const location = useLocation();
  const { state } = location;
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);
  const [clientSecret, setClientSecret] = useState<string | ''>('');
  const [isLoading, setIsloading] = useState(true);

  const sendConfig = async () => {
    const response = await axios.get(`${serverUrl}/config`);
    const { publishableKey } = response.data;
    setStripePromise(await loadStripe(publishableKey));
  };

  const createPaymentIntent = async () => {
    const response = await axios.post(`${serverUrl}/create-payment-intent`, {
      amount: state.totalPrice,
    });
    const { clientSecret } = await response.data;
    setClientSecret(clientSecret);
  };

  useEffect(() => {
    sendConfig();
    createPaymentIntent();
    if (state) {
      setIsloading(false);
    }
  }, [state]);

  return (
    <div>
      <h1>Payment</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )
      )}
    </div>
  );
};

export default Payment;
