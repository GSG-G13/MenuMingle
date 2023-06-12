import { DataTypes } from 'sequelize';
import sequelize from '../db/config/connection';

const Staff = sequelize.define('staffs', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: DataTypes.STRING,
  email: DataTypes.STRING,
});

export default Staff;
