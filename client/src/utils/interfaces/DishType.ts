interface DishType {
  id: number;
  name: string;
  price: number;
  image: string;
  availability?: boolean;
  ingredients: string;
  category_id?: number;
  count?: number;
}
export default DishType;
