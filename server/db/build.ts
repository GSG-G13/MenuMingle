import config from '../config/environment';
import { sequelize } from '../models';

const { nodeEnv } = config.env;

const buildModels = async () => {
  await sequelize.sync({ force: true, logging: false });
};

if (nodeEnv === 'test') {
  buildModels();
}

export default buildModels;
