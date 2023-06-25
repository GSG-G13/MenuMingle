import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient, QueryClientProvider } from 'react-query';
import CartNavBar from '../components/Cart/CartNavBar';
import CartList from '../components/Cart/CartList';
import DownComponent from '../components/Cart/DownComponet';

const queryClient = new QueryClient();

const CartPage = () => {
  const [notes, setNotes] = useState<string>('');
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <CartNavBar />
        <CartList notes={notes} setNotes={setNotes} />
        <DownComponent notes={notes} setNotes={setNotes} />
      </div>
    </QueryClientProvider>
  );
};
export default CartPage;
