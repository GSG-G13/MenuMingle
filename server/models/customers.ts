import { DataTypes } from 'sequelize';
import sequelize from '../db/config/connection';
import customersAttributes from '../utils/types/cutomersAttributes';

const Customer = sequelize.define<customersAttributes>('customers', {
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
