import { Dispatch, SetStateAction } from 'react';
import DishType from './DishType';

export { default as FoodSectionProps } from './FoodSectionProps';
export { default as DishType } from './DishType';
export { default as AllCartProps } from './AllCartProps';
export { default as ButtonSectionProps } from './ButtonSectionProps';
export { default as TextFieldComponentProps } from './TextFieldComponent';

export interface Category {
  id: number;
  name: string;
}

export interface Dish {
  id: number;
  name: string;
  price: number;
  image: string;
  availability: boolean;
  ingredients: string;
  count: number;
  category_id: number;
}
export interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
  availability: boolean;
  ingredients: string;
  count: number;
  category_id: number;
}

export interface AddToCartButtonProps {
  item: Item;
}
export interface DishCardProps {
  dish: {
    id: number;
    name: string;
    price: number;
    image: string;
    ingredients: string;
    category_id: number;
    count: number;
    availability: boolean;
  };
}

export interface FilterComponentProps {
  categories: Category[];
  onCategorySelect: (category_id: number) => void;
}
export interface DishListProps {
  dishes: Dish[];
  cat: number;
}

export interface cartItemInterface {
  item: Item;
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete: () => void;
}
export interface EditDishProps {
  dishToUpdate: DishType;
  setOpen: Dispatch<SetStateAction<boolean>>;
  refetch: () => void;
}
export interface DishFormProps {
  onSubmit: (updatedDish: DishType) => void;
  dishToUpdate: DishType;
}

export interface DishWithQuantity extends DishType {
  quantity: number;
}
export interface ordersTable {
  id: number;
  open: boolean;
  onClose: () => void;
}

export interface BodyType {
  orders: [] | null;
  note: string;
  customerId: string;
}

export interface OrderType {
  id: number;
  name: string;
  status: string;
  count: number;
  cartId: number;
  note: string;
}
