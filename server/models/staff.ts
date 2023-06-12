import { DataTypes } from 'sequelize';
import staffAttribute from '../utils/types/staffAttributes';
import sequelize from '../db/config/connection';

const Staff = sequelize.define<staffAttribute>(
  'staffs',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'roles',
        key: 'id',
      },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 255], // Example validation for password length
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 50], // Example validation for username length
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Example validation for email format
      },
    },
  },
  {
    timestamps: true,
  },
);

export default Staff;
