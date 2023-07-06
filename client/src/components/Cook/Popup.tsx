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
import { ordersTable, DishWithQuantity } from '../../utils';

const Popup = ({ open, onClose, id }: ordersTable): JSX.Element => {
  const [dishes, setDishes] = useState<DishWithQuantity[]>([]);
  const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
  const fetchDishes = async () => {
    if (!id) return;
    const response = await axios.get(`${serverUrl}/api/v1/cart/${id}/dishes`, {
      withCredentials: true,
    });
    setDishes(response.data);
    // eslint-disable-next-line consistent-return
    return response;
  };

  const { isLoading } = useQuery({
    queryKey: ['dishes', id],
    queryFn: fetchDishes,
    refetchOnReconnect: true,
  });
  if (isLoading) return <Loader />;
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
              {dishes.map(dish => (
                <TableRow
                  key={dish.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {dish.name}
                  </TableCell>
                  <TableCell>{dish.quantity}</TableCell>
                  <TableCell>{dish.ingredients}</TableCell>
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
