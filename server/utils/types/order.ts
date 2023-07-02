import { Model } from 'sequelize';

interface orderAttributes extends Model {
  id: number | undefined;
  quantity: number;
}

export default orderAttributes;
