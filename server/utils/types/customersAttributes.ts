import { Model } from 'sequelize';

interface customersAttributes extends Model {
  id: number;
  name: string;
  phoneNumber: string;
}
export default customersAttributes;
