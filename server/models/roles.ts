import { DataTypes } from 'sequelize';
import { RolesAttributes } from '../utils/types';
import sequelize from '../db/config/connection';

const Roles = sequelize.define<RolesAttributes>('roles', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Roles;
