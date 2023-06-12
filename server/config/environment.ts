import dotenv from 'dotenv';

dotenv.config();

const {
  DEV_DB_URL,
  TEST_DB_URL,
  PRODUCTION_DB_URL,
  NODE_ENV,
  PORT,
  JWT_SECRET,
} = process.env;

const configs = {
  app: { port: PORT, jwtSecret: JWT_SECRET },
  env: {
    nodeEnv: NODE_ENV,
    testUrl: TEST_DB_URL,
    productionUrl: PRODUCTION_DB_URL,
    developmentUrl: DEV_DB_URL,
  },
};

export default configs;
