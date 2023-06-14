import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

interface orderAttributes
  extends Model<
    InferAttributes<orderAttributes>,
    InferCreationAttributes<orderAttributes>
  > {
  id: CreationOptional<number>;
}

export default orderAttributes;
