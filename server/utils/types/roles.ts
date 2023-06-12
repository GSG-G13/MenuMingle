import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export interface RolesAttributes
  extends Model<
    InferAttributes<RolesAttributes>,
    InferCreationAttributes<RolesAttributes>
  > {
  id: CreationOptional<number>;
  role: string;
}
