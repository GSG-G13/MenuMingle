import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

interface RolesAttributes
  extends Model<
    InferAttributes<RolesAttributes>,
    InferCreationAttributes<RolesAttributes>
  > {
  id: CreationOptional<number>;
  role: string;
  description: string;
}

export default RolesAttributes;
