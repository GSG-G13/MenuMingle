import { useState, useEffect } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './form.css';

const CheckoutForm = () => {
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
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/payment/completion`,
      },
    });

    if (error) {
      setMessage(`Payment failed: ${error.message}`);
      console.log('errrrrrrrrr', error.message);
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
