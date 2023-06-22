import { useEffect, useState } from 'react';
import {
  CartNavBar,
  ButtonSection,
  DownComponent,
  AllCart,
} from '../components/cartComponent';

const CartPage = () => {
  const [menu, setMenu] = useState([]);
  const [notes, setNotes] = useState('');
  useEffect(() => {
    const storedMenu = localStorage.getItem('items');
    const data = storedMenu ? JSON.parse(storedMenu) : null;
    setMenu(data);
  }, []);
  return (
    <>
      <CartNavBar />
      <AllCart menu={menu} setMenu={setMenu} />
      <ButtonSection notes={notes} setNotes={setNotes} />
      <DownComponent />
    </>
  );
};

export default CartPage;
