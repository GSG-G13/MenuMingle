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
  Dialog,
  DialogContent,
  CssBaseline,
  Typography,
  TablePagination,
} from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { useNavigate } from 'react-router-dom';
import EditDish from './edit';
import loader from '../loader';

interface Dish {
  id: number;
  name: string;
  image: string;
  ingredients: string;
  price: number;
}

const DishesTable: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [dishes, setDishes] = useState<Dish[]>([]);

  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/dishes');
      setDishes(response.data.data);
      return response.data.data as Dish[];
    } catch (error) {
      throw new Error('Error fetching dishes');
    }
  };

  const { isLoading, isError } = useQuery({
    queryKey: ['dishes'],
    queryFn: fetchDishes,
  });
  if (isLoading) return <loader />;
  if (isError) return <div>Error</div>;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
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
    rowsPerPage - Math.min(rowsPerPage, dishes.length - page * rowsPerPage);

  return (
    <TableContainer component={Paper} style={{ background: 'transparent' }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{ boxShadow: '2px 2px 2px #E0E0E0' }}>
          <Typography
            sx={{ margin: '20px 20px 20px 20px', fontWeight: 'bold', fontSize: '18px' }}
          >
            All Dishes
          </Typography>
          <TableRow sx={{ height: '40px', fontSize: '18px' }}>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>ID</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Name</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Image</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>
              Ingredients
            </TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Price</TableCell>
            <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? dishes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : dishes
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
                  src={row.image}
                  alt={row.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    marginRight: '16px',
                    borderRadius: '20%',
                  }}
                />
              </TableCell>
              <TableCell>{row.ingredients}</TableCell>
              <TableCell>${row.price}</TableCell>
              <TableCell>
                <>
                  <CssBaseline />

                  <Dialog
                    open={open}
                    onClose={() => setOpen(!open)}
                    sx={{
                      '& > .MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <DialogContent>
                      <EditDish key={row.id} id={row.id} />
                    </DialogContent>
                  </Dialog>

                  <EditRoundedIcon
                    style={{
                      color: '#000',
                      bottom: '50px',
                      left: '10px',
                    }}
                    onClick={() => setOpen(true)}
                  />
                </>
                <DeleteOutlineRoundedIcon />
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
          count={dishes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ diplay: 'flex', position: 'fixed' }}
        />
      </Table>
    </TableContainer>
  );
};

export default DishesTable;
