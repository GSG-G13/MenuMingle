import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
} from '@mui/material';

import Loader from '../loader';
import Popup from './Popup';
import Done from './Done';

import { OrderType } from '../../utils';
import NoOrders from './NoOrders';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const InProgressOrders = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [orderId, setOrderId] = useState(0);
  const [cart, setCart] = useState(orders.length);

  const handleOpen = (id: number) => {
    setOpen(true);
    setOrderId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/v1/cart/inprogress`, {
        withCredentials: true,
      });
      setOrders(response.data.data);
      setCart(response.data.data.length);
      return response.data.data as OrderType[];
    } catch (error) {
      throw new Error('Error fetching orders');
    }
  };

  const { isLoading, isError, refetch } = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
    refetchInterval: 120000,
  });
  if (isLoading) return <Loader />;
  if (isError) return <div>Error</div>;

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, orders.length - page * rowsPerPage);
  return (
    <TableContainer component={Paper} style={{ background: 'transparent' }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{ boxShadow: '2px 2px 2px #E0E0E0' }}>
          <Typography
            sx={{ margin: '20px 20px 20px 20px', fontWeight: 'bold', fontSize: '18px' }}
          >
            All orders
          </Typography>
          <TableRow sx={{ height: '40px', fontSize: '18px' }}>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>ID</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Note</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Orders</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart ? (
            (rowsPerPage > 0
              ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : orders
            ).map(row => {
              return (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.note}</TableCell>
                  <TableCell>
                    <div>
                      <FormatListBulletedIcon onClick={() => handleOpen(row.id)} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Done id={row.id} refetch={refetch} />
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell align="right"> </TableCell>
              <TableCell align="center">
                <NoOrders />
              </TableCell>
            </TableRow>
          )}
          <Popup open={open} onClose={handleClose} id={orderId} />

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={orders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ display: 'flex', position: 'fixed' }}
        />
      </Table>
    </TableContainer>
  );
};

export default InProgressOrders;
