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
  },
  orderId: {
    type: DataTypes.INTEGER,
  },
  note: {
    type: DataTypes.STRING,
  },
});

export default Cart;
