import { DataTypes } from 'sequelize';
import sequelize from '../db/config/connection';

const Customer = sequelize.define('customers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.TEXT,
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Customer;
