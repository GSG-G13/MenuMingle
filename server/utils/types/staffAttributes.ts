import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';

interface staffAttribute
  extends Model<
    InferAttributes<staffAttribute>,
    InferCreationAttributes<staffAttribute>
  > {
  id?: number;
  username: string;
  password: string;
  role_id?: number;
}

export default staffAttribute;
