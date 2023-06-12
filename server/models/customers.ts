import { DataTypes } from 'sequelize';
import sequelize from '../db/config/connection';
import { customersAttributes } from '../utils/types/';

const Customer = sequelize.define<customersAttributes>('customers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Customer;
