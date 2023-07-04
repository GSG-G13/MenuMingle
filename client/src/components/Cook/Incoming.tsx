import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

interface Order {
  id: number;
  name: string;
  status: boolean;
  count: number;
  cartId: number;
}

const IncomingOrders: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/dishes');
      setOrders(response.data.data);
      return response.data.data;
    } catch (error) {
      throw new Error('Error fetching orders');
    }
  };

  const { isLoading, isError } = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
  });
  if (isLoading) return <div>is Loading</div>;
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
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Name</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Quantity</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>CartId</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Status</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : orders
          ).map(row => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <img
                  src={row.count.toString()}
                  alt={row.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    marginRight: '16px',
                    borderRadius: '20%',
                  }}
                />
              </TableCell>
              <TableCell>{row.cartId}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <CheckCircleOutlineRoundedIcon />{' '}
              </TableCell>
            </TableRow>
          ))}

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
          style={{ position: 'fixed' }}
        />
      </Table>
    </TableContainer>
  );
};

export default IncomingOrders;
