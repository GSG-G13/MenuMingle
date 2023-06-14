import { Model, CreationOptional } from 'sequelize';

interface customersAttributes extends Model {
  id: CreationOptional<number>;
  name: string;
  phone_number: string;
}
export default customersAttributes;
