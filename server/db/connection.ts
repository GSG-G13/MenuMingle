import { Sequelize } from 'sequelize';
import configs from '../config/environment';

const {
  env: { nodeEnv, testUrl, productionUrl, developmentUrl },
} = configs;
let connectionString: string;

if (!testUrl || !productionUrl || !developmentUrl) {
  throw new Error(`invalid ${nodeEnv} URL`);
}

if (nodeEnv === 'development') {
  connectionString = developmentUrl as string;
} else if (nodeEnv === 'production') {
  connectionString = productionUrl as string;
} else if (nodeEnv === 'test') {
  connectionString = testUrl as string;
} else {
  connectionString = developmentUrl as string;
}

const sequelize = new Sequelize(connectionString, {
  dialectOptions: {
    charset: 'utf8',
    ssl: false,
  },
});

export default sequelize;
