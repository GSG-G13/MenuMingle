import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import DishesAttributes from './dishesAttributes';
import CartAttributes from './cart';

interface orderAttributes
  extends Model<
    InferAttributes<orderAttributes>,
    InferCreationAttributes<orderAttributes>
  > {
  id: CreationOptional<number>;
  dishId: ForeignKey<DishesAttributes['id']>;
  customerId: number; // i think this should be foreign key to customer table (so Momen marwan can do it)
  cartId: ForeignKey<CartAttributes['id']>;
  createdAt: Date;
  updatedAt: Date;
}

export default orderAttributes;
