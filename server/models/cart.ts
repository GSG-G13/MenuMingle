import { DataTypes } from 'sequelize';
import { CartAttributes } from '../utils/types';
import sequelize from '../db/config/connection';

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
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: 'carts',
  },
);

export default Cart;
