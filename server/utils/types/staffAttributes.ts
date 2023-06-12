import {
  Model,
  ForeignKey,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import RolesAttributes from './roles';

interface staffAttribute
  extends Model<
    InferAttributes<staffAttribute>,
    InferCreationAttributes<staffAttribute>
  > {
  id: CreationOptional<number>;
  username: string;
  email: string;
  password: string;
  roleId: ForeignKey<RolesAttributes['id']>;
  createdAt?: CreationOptional<Date>; // I still need explanation about why would i need it.
  updatedAt?: CreationOptional<Date>;
}

export default staffAttribute;
