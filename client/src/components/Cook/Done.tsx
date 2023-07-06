import axios from 'axios';
import { Button } from '@mui/material';
import { FC } from 'react';

const Done: FC<{ id: number }> = ({ id, refetch }) => {
  const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

  const updateStatus = async () => {
    if (id) {
      axios.put(`${serverUrl}/api/v1/cart/${id}/update`, {
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
