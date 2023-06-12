import { DataTypes } from 'sequelize';
import staffAttribute from '../utils/types/stuffAttributes';
import sequelize from '../db/config/connection';

const Staff = sequelize.define<staffAttribute>('staffs', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: DataTypes.STRING,
  email: DataTypes.STRING,
});

export default Staff;
