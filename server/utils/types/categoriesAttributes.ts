import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

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

export default CategoriesAttributes;
