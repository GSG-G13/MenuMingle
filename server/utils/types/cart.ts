import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

interface CartAttributes
  extends Model<
    InferAttributes<CartAttributes>,
    InferCreationAttributes<CartAttributes>
  > {
  id: CreationOptional<number>;
  note?: string;
}

export default CartAttributes;
