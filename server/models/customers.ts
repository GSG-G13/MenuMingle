import { DataTypes } from 'sequelize';
import sequelize from '../db/config/connection';
import { customersAttributes } from '../utils/types/';

const Customer = sequelize.define<customersAttributes>(
  'Customer',
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
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 10],
      },
    },
  },
  { timestamps: true, tableName: 'customers' },
);

export default Customer;
