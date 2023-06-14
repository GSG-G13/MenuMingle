import { DataTypes } from 'sequelize';
import { CategoriesAttributes } from '../utils/types';
import sequelize from '../db/config/connection';

const Category = sequelize.define<CategoriesAttributes>(
  'categories',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

export default Category;
