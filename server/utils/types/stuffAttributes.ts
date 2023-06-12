import { Model } from 'sequelize';

interface staffAttribute extends Model {
  id: number;
  username: string;
  email: string;
}

export default staffAttribute;
