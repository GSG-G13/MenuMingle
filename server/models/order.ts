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
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    timestamps: true,
    tableName: 'orders',
    modelName: 'Order',
  },
);

export default Order;
