import express, { json, urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';

import serverError from './middleware/serverError';
import clientError from './middleware/clientError';
import router from './routes';

import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: `2022-11-15`,
});

export { stripe };

app.use([
  cors(),
  json(),
  urlencoded({ extended: false }),
  compression(),
  cookieParser(),
]);

app.get('/config', (req, res) => {
  res.send({
    publishableKey: process.env.PUBLISHABLE_KEY,
  });
});

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'usd',
      amount: 10000,
      payment_method_types: ['card'],
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e: any) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.use('/api/v1', router);
app.use(serverError);
app.use(clientError);

export default app;
