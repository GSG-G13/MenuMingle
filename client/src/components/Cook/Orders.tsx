import { useState } from 'react';
import axios from 'axios';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  Table,
} from '@mui/material';

import { useQuery } from '@tanstack/react-query';
import Loader from '../loader';

const Popup = ({ open, onClose, id }) => {
  const [dishes, setDishes] = useState([]);

  const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

  const fetchDishes = async () => {
    const response = await axios.get(`${serverUrl}/api/v1/cart/${id}/dishes`);
    setDishes(response.data);
    return response;
  };

  const { isLoading, isError } = useQuery({
    queryKey: ['dishes'],
    queryFn: fetchDishes,
  });

  if (isLoading) return <Loader />;
  if (isError) return <div>Error</div>;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Dishes</DialogTitle>
      <DialogContent>
        <TableContainer
          component={Paper}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Ingredients</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {dishes.map(row => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.ingredients}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
