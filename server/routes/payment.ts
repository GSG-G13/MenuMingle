import { Router } from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

const paymentRouter = Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: `2022-11-15`,
});

paymentRouter.get('/config', (req, res) => {
  res.json({
    publishableKey: process.env.PUBLISHABLE_KEY,
  });
});

paymentRouter.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'usd',
      amount: 1000,
      payment_method_types: ['card'],
    });

    // Send publishable key and PaymentIntent details to client
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e: any) {
    return res.status(400).json({
      error: {
        message: e.message,
      },
    });
  }
});

export default paymentRouter;
