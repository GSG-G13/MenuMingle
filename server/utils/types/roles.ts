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
}

export default RolesAttributes;
