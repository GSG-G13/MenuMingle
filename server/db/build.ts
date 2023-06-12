import sequelize from './config/connection';
sequelize.sync({ alter: true });
