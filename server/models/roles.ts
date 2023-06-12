// I need the connection file here I am only gonna assume that momen export it as sequelize
import { DataTypes } from 'sequelize';
import { RolesAttributes } from '../utils/types/roles';
import sequelize from './connection';

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
