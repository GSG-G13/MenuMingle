import axios from 'axios';
import { Button } from '@mui/material';

const Done = ({ id }: { id: number }): JSX.Element => {
  const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

  const updateStatus = async () => {
    if (id) {
      axios.put(`${serverUrl}/api/v1/cart/${id}/update`);
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
