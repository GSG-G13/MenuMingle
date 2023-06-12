import { DataTypes } from 'sequelize';
import { orderAttributes } from '../utils/types/order';
import sequelize from '../db/config/connection';

const Order = sequelize.define<orderAttributes>('orders', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dishId: {
    type: DataTypes.INTEGER,
  },
  customerId: {
    type: DataTypes.INTEGER,
  },
  cartId: {
    type: DataTypes.INTEGER,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export default Order;
