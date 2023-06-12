import { DataTypes } from 'sequelize';
import { CategoriesAttributes } from '../utils/types';
import sequelize from '../db/config/connection';

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
