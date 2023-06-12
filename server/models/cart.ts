import { DataTypes } from 'sequelize';
import { CartAttributes } from '../utils/types/cart';
import sequelize from '../db/config/connection';

const Cart = sequelize.define<CartAttributes>('cart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dishId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'dishes',
      key: 'id',
    },
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'order',
      key: 'id',
    },
  },
  note: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Cart;
