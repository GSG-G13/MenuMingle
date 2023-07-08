import { useState, useEffect } from 'react';
import CartNavBar from '../components/Cart/CartNavBar';
import CartList from '../components/Cart/CartList';
import DownComponent from '../components/Cart/DownComponent';
import { Item } from '../utils';

const CartPage = () => {
  const [notes, setNotes] = useState<string>('');
  const [cartItems, setCartItems] = useState<Item[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems) as Item[]);
    }
  }, []);

  const handleClearCart = (): void => {
    localStorage.removeItem('items');
    setCartItems([]);
  };
  return (
    <div>
      <CartNavBar />
      <CartList
        notes={notes}
        setNotes={setNotes}
        handleClearCart={handleClearCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <DownComponent notes={notes} handleClearCart={handleClearCart} />
    </div>
  );
};
export default CartPage;
