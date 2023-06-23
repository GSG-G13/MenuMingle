import { useEffect, useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import CartItem from './CartItem';
import EmptyCart from './empty';
import DownComponent from './DownComponet';

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, [cartItems]);

  const handleClearCart = () => {
    localStorage.removeItem('items');
    setCartItems([]);
  };

  const handleIncrement = itemId => {
    const updatedItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const handleDecrement = itemId => {
    const updatedItems = cartItems.map(item => {
      if (item.id === itemId && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;

    cartItems.forEach(item => {
      totalPrice += item.price * item.count;
    });

    return totalPrice.toFixed(2);
  };
  const handleDelete = itemId => {
    const items = JSON.parse(localStorage.getItem('items')) || [];

    const updatedItems = items.filter(item => item.id !== itemId);

    localStorage.setItem('items', JSON.stringify(updatedItems));
  };
  return (
    <Grid container spacing={2} style={{ width: '100%' }}>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onIncrement={() => handleIncrement(item.id)}
          onDecrement={() => handleDecrement(item.id)}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
      <Grid item xs={12}>
        {cartItems.length > 0 ? (
          <Button
            onClick={handleClearCart}
            style={{
              color: '#808080',
              fontSize: '14px',
              textTransform: 'none',
              textDecoration: 'underline',
            }}
          >
            ClearCart
          </Button>
        ) : (
          <EmptyCart />
        )}
        <DownComponent totalPrice={calculateTotalPrice()} />
      </Grid>
    </Grid>
  );
};

export default CartList;
