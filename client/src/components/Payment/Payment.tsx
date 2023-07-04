/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const Payment = () => {
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);
  const [clientSecret, setClientSecret] = useState<string | ''>('');

  useEffect(() => {
    fetch(`${serverUrl}/config`).then(async res => {
      const { publishableKey } = await res.json();
      setStripePromise(await loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`${serverUrl}/create-payment-intent`, {
      method: 'POST',
      body: JSON.stringify({}),
    }).then(async res => {
      // eslint-disable-next-line no-shadow
      const { clientSecret } = await res.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div>
      <h1>Payment</h1>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
