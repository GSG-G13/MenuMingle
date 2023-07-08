import dotenv from 'dotenv';

dotenv.config();

const {
  DEV_DB_URL,
  TEST_DB_URL,
  PRODUCTION_DB_URL,
  NODE_ENV,
  PORT,
  JWT_SECRET,
  PUBLISHABLE_KEY,
  STRIPE_SECRET_KEY,
} = process.env;

const configs = {
  app: { port: PORT, jwtSecret: JWT_SECRET },
  env: {
    nodeEnv: NODE_ENV,
    testUrl: TEST_DB_URL,
    productionUrl: PRODUCTION_DB_URL,
    developmentUrl: DEV_DB_URL,
    publishableKey: `${PUBLISHABLE_KEY}`,
    stripeSecretKey: `${STRIPE_SECRET_KEY}`,
  },
};

export default configs;
