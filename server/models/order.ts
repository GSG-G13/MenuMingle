import { DataTypes } from 'sequelize';
import { OrderAttributes } from '../utils/types';
import sequelize from '../db/connection';

const Order = sequelize.define<OrderAttributes>(
  'Order',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'orders',
  },
);

export default Order;
