import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export interface CartAttributes
  extends Model<
    InferAttributes<CartAttributes>,
    InferCreationAttributes<CartAttributes>
  > {
  id: CreationOptional<number>;
  dishId: number;
  orderId: number;
  note?: string;
}
