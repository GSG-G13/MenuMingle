import { Dispatch, SetStateAction } from 'react';
import { Item } from '.';

interface ButtonSectionProps {
  notes: string;
  setNotes: Dispatch<SetStateAction<string>>;
  setCartItems: Dispatch<SetStateAction<Item[]>>;
  cartItems: Item[];
  handleClearCart: () => void;
}

export default ButtonSectionProps;
