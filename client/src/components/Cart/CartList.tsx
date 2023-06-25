import { useEffect, useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import CartItem from './CartItem';
import EmptyCart from './Empty';
import { Item } from '../../utils';
import ButtonSection from './Pop';

const CartList = (): JSX.Element => {
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const handleDelete = (itemId: number): void => {
    const itemsString = localStorage.getItem('items');
    const items: Item[] = itemsString ? JSON.parse(itemsString) : [];

    const updatedItems: Item[] = items.filter(item => item.id !== itemId);

    localStorage.setItem('items', JSON.stringify(updatedItems));
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
  };

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

  const handleIncrement = (itemId: number): void => {
    const updatedItems: Item[] = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const handleDecrement = (itemId: number): void => {
    const updatedItems: Item[] = cartItems.map(item => {
      if (item.id === itemId && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const calculateTotalPrice = (): string => {
    let totalPrice = 0;

    cartItems.forEach(item => {
      totalPrice += item.price * item.count;
    });

    return totalPrice.toFixed(2);
  };

  return (
    <Grid container spacing={2} style={{ width: '100%', marginTop: '5%' }}>
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
              position: 'fixed',
              top: '6%',
              right: '5px',
            }}
          >
            ClearCart
          </Button>
        ) : (
          <EmptyCart />
        )}

        <Typography
          align="center"
          sx={{
            marginTop: 2,
            position: 'fixed',
            bottom: '60px',
            left: '5px',
            width: '100%',
            backgroundColor: '#fff',
            fontWeight: 'bold',
          }}
        >
          <ButtonSection />
          {/* we need to handel the notes here to add them to orders table in db <= for later  */}
          Total Price: ${calculateTotalPrice()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CartList;
