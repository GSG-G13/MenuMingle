import sequelize from './config/connection';
import config from 'env_config_path';

const { nodeEnv } = config;

const buildModels = async () => sequelize.sync({ alter: true });

if (nodeEnv !== 'test') {
  buildModels();
}