import { DataTypes } from 'sequelize';
import { RolesAttributes } from '../utils/types';
import sequelize from '../db/config/connection';

const Role = sequelize.define<RolesAttributes>(
  'Role',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, tableName: 'roles' },
);

export default Role;
