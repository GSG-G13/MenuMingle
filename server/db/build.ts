import config from '../config/environment';
import { sequelize } from '../models';

const { nodeEnv } = config.env;

const buildModels = async () => {
  sequelize.sync({ force: true, logging: false });
};

if (nodeEnv !== 'test') {
  buildModels().then(() => {
    console.log(sequelize.models);
  });
}

export default buildModels;
