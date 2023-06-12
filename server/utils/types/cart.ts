import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import DishesAttributes from './dishesAttributes';
import orderAttributes from './order';

interface CartAttributes
  extends Model<
    InferAttributes<CartAttributes>,
    InferCreationAttributes<CartAttributes>
  > {
  id: CreationOptional<number>;
  dishId: ForeignKey<DishesAttributes['id']>;
  orderId: ForeignKey<orderAttributes['id']>;
  note?: string;
}

export default CartAttributes;
