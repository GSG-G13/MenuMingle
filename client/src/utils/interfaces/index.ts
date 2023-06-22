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
