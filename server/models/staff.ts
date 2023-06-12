import { DataTypes } from 'sequelize';
import staffAttribute from '../utils/types/staffAttributes';
import sequelize from '../db/config/connection';

const Staff = sequelize.define<staffAttribute>('staffs', {
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
  },
  password: DataTypes.STRING,
  username: DataTypes.STRING,
  email: DataTypes.STRING,
});

export default Staff;
