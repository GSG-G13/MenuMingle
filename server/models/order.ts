import { DataTypes } from 'sequelize';
import { orderAttributes } from '../utils/types/order';
import sequelize from '../db/config/connection';

const Order = sequelize.define<orderAttributes>('orders', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  dishId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'dishes',
      key: 'id',
    },
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'customers',
      key: 'id',
    },
  },
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'cart',
      key: 'id',
    },
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export default Order;
