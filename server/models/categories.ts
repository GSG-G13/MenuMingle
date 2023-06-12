// I need the connection file here I am only gonna assume that momen export it as sequelize
import { DataTypes } from 'sequelize';
import { CategoriesAttributes } from '../utils/types';

const Categories = sequelize.define<CategoriesAttributes>('dish', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

export default Categories;
