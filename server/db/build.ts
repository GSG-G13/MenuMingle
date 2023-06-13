import sequelize from './config/connection';
import configs from '../config/environment';

const {
  env: { nodeEnv },
} = configs;

const buildModels = async () => sequelize.sync({ alter: true });

if (nodeEnv !== 'test') {
  buildModels();
}
