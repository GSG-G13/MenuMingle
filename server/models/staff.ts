import { DataTypes } from 'sequelize';
import { staffAttribute } from '../utils/types';
import sequelize from '../db/connection';

const Staff = sequelize.define<staffAttribute>(
  'Staff',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 255],
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 50],
      },
    },
  },
  {
    timestamps: true,
    tableName: 'staffs',
  },
);

export default Staff;
