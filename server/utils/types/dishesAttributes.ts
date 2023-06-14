import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

interface DishesAttributes
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
}

export default DishesAttributes;
