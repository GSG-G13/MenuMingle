import { DataTypes } from 'sequelize';
import { CartAttributes } from '../utils/types';
import sequelize from '../db/connection';
import { CartStatus } from '../utils';

const Cart = sequelize.define<CartAttributes>(
  'Cart',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    note: {
      type: DataTypes.STRING,
    },
    customerId: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM(
        CartStatus.Value1,
        CartStatus.Value2,
        CartStatus.Value3,
      ),
      defaultValue: CartStatus.Value1,
    },
  },
  {
    timestamps: true,
    tableName: 'carts',
  },
);

export default Cart;
