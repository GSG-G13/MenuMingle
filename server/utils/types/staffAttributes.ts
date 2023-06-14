import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';

interface staffAttribute
  extends Model<
    InferAttributes<staffAttribute>,
    InferCreationAttributes<staffAttribute>
  > {
  id?: number;
  username: string;
  password: string;
}

export default staffAttribute;
