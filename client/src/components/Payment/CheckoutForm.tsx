import { useState, FormEvent } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './form.css';
import { Alert } from '@mui/material';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/waiting-room`,
      },
    });

    if (error) {
      setMessage(`Payment failed: ${error.message}`);
    }
    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={isProcessing} id="submit">
        <span id="button-text">{isProcessing ? 'Processing...' : 'Pay Now'}</span>
        {message && <Alert severity="error">{message}</Alert>}
      </button>
    </form>
  );
};

export default CheckoutForm;
