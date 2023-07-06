import { Response, Request, NextFunction } from 'express';
import Stripe from 'stripe';

import configs from '../../config/environment';

const {
  env: { stripeSecretKey },
} = configs;

let stripe: Stripe | undefined;

if (stripeSecretKey) {
  stripe = new Stripe(stripeSecretKey, {
    apiVersion: `2022-11-15`,
  });
} else {
  console.error('stripeSecretKey is undefined');
}

const paymentIntent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      body: { amount },
    } = req;

    if (stripe) {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: 'usd',
        amount: parseInt(amount) * 100,
        payment_method_types: ['card'],
      });

      res.json({
        clientSecret: paymentIntent.client_secret,
      });
    }
  } catch (error) {
    next(error);
  }
};

export default paymentIntent;
