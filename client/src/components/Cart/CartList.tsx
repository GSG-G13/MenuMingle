import { Grid, Typography, Button } from '@mui/material';
import CartItem from './CartItem';
import EmptyCart from './Empty';
import { Item, ButtonSectionProps } from '../../utils';
import ButtonSection from './Pop';

const CartList = ({
  notes,
  setNotes,
  handleClearCart,
  setCartItems,
  cartItems,
}: ButtonSectionProps): JSX.Element => {
  const handleDelete = (itemId: number): void => {
    const itemsString = localStorage.getItem('items');
    const items: Item[] = itemsString ? JSON.parse(itemsString) : [];

    const updatedItems: Item[] = items.filter(item => item.id !== itemId);

    localStorage.setItem('items', JSON.stringify(updatedItems));
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
  };

  const handleIncrement = (itemId: number): void => {
    const updatedItems: Item[] | undefined = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const handleDecrement = (itemId: number): void => {
    const updatedItems: Item[] | undefined = cartItems?.map(item => {
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
    <Grid container style={{ width: '100%', marginTop: '5%' }}>
      {cartItems?.map(item => (
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
              top: '5%',
              right: '5px',
              marginBottom: '20px',
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
          <ButtonSection notes={notes} setNotes={setNotes} />
          Total Price: ${calculateTotalPrice()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CartList;
