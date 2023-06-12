import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import { CategoriesAttributes } from './categoriesAttributes';

export interface DishesAttributes
  extends Model<
    InferAttributes<DishesAttributes>,
    InferCreationAttributes<DishesAttributes>
  > {
  id: CreationOptional<number>;
  name: string;
  price: number;
  image: string;
  availability: boolean;
  ingredients: string;
  categoryId?: ForeignKey<CategoriesAttributes['id']>;
  createdAt?: CreationOptional<Date>; // I still need explanation about why would i need it.
  updatedAt?: CreationOptional<Date>;
}
