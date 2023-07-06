import axios from 'axios';
import { Button } from '@mui/material';
import { Dispatch, FC, SetStateAction } from 'react';

const Done: FC<{ id: number }> = ({ id, refetch }) => {
  const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

  const updateStatus = async () => {
    // cartId: string;
    // cartStatus: string;
    if (id) {
      axios.put(`${serverUrl}/api/v1/cart/update-cart?cartId=${id}&cartStatus=done`);
      refetch();
      // setDoneOrders(prevValue => [...prevValue, id]);
    }
  };
  return (
    <Button
      onClick={updateStatus}
      variant="text"
      style={{
        color: 'green',
        textTransform: 'none',
        fontSize: '18px',
      }}
    >
      Done ✓
    </Button>
  );
};

export default Done;
