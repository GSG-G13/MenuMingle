import axios from 'axios';
import { Button } from '@mui/material';
import { FC } from 'react';

interface DoneProps {
  id: number;
  refetch: () => void;
}

const Done: FC<DoneProps> = ({ id, refetch }) => {
  const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

  const updateStatus = async () => {
    if (id) {
      axios.put(`${serverUrl}/api/v1/cart/update-cart?cartId=${id}&cartStatus=done`, {
        withCredentials: true,
      });
      refetch();
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
