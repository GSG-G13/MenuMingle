import { useState } from 'react';
import CartNavBar from '../components/Cart/CartNavBar';
import CartList from '../components/Cart/CartList';
import DownComponent from '../components/Cart/DownComponet';

const CartPage = () => {
  const [notes, setNotes] = useState<string>('');
  return (
    <div>
      <CartNavBar />
      <CartList notes={notes} setNotes={setNotes} />
      <DownComponent notes={notes} setNotes={setNotes} />
    </div>
  );
};
export default CartPage;
