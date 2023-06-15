import { DataTypes } from 'sequelize';
import { CategoriesAttributes } from '../utils/types';
import sequelize from '../db/connection';

const Category = sequelize.define<CategoriesAttributes>(
  'Category',
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
    tableName: 'categories',
  },
);

export default Category;
