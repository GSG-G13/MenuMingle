import { Model } from 'sequelize';

interface orderAttributes extends Model {
  totalPrice: number;
  id: number | undefined;
  quantity: number;
}

export default orderAttributes;
