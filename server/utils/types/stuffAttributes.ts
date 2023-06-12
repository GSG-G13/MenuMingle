import { Model } from 'sequelize';

interface staffAttribute extends Model {
  id: number;
  username: string;
  email: string;
  password: string;
}

export default staffAttribute;
