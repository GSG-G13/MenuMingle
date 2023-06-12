import { DataTypes } from 'sequelize';
import sequelize from '../db/config/connection';
import customersAttributes from '../utils/types/customersAttributes';

const Customer = sequelize.define<customersAttributes>(
  'customers',
  {
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
      validate: {
        len: [3, 50],
      },
    },
  },
  { timestamps: true },
);

export default Customer;
