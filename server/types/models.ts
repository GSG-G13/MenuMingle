import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

interface DishesAttributes
  extends Model<
    InferAttributes<DishesAttributes>,
    InferCreationAttributes<DishesAttributes>
  > {
  id: CreationOptional<number>;
  name: string;
  price: number;
  image: string; // or Buffer I am not sure how we're gonna store it.
  availability: boolean;
  ingredients: string;
  categoryId?: ForeignKey<CategoriesAttributes['id']>;
  createdAt?: CreationOptional<Date>; // I still need explanation about why would i need it.
  updatedAt?: CreationOptional<Date>;
}

interface CategoriesAttributes
  extends Model<
    InferAttributes<CategoriesAttributes>,
    InferCreationAttributes<CategoriesAttributes>
  > {
  id: CreationOptional<number>;
  name: string;
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;
}

export { DishesAttributes, CategoriesAttributes };
