import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import { CartStatus } from '../enum';

interface CartAttributes
  extends Model<
    InferAttributes<CartAttributes>,
    InferCreationAttributes<CartAttributes>
  > {
  id: CreationOptional<number>;
  note?: string;
  status: CartStatus;
  customerId: string;
}

export default CartAttributes;
