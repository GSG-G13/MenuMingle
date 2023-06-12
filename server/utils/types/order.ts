import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export interface orderAttributes
  extends Model<
    InferAttributes<orderAttributes>,
    InferCreationAttributes<orderAttributes>
  > {
  id: CreationOptional<number>;
  dishId: number;
  customerId: number;
  cartId: number;
  createdAt: Date;
  updatedAt: Date;
}
