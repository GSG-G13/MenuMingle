import React, { FC, useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
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
  Alert,
  Stack,
} from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { DishType } from '../../utils';
import EditDish from './edit';
import CreateDish from './CreateDish';
import Loader from '../loader';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const DishesTable: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [dishes, setDishes] = useState<DishType[]>([]);
  const [dishToUpdate, setDishToUpdate] = useState<DishType>(dishes[0]);

  const fetchDishes = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/v1/dishes`, {
        withCredentials: true,
      });
      setDishes(response.data.data);
      return response.data.data as DishType[];
    } catch (error) {
      throw new Error('Error fetching dishes');
    }
  };

  const deleteDish = async (id: number | undefined): Promise<void> => {
    try {
      await axios.delete(`${serverUrl}/api/v1/dishes/delete/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      throw new Error('Can not delete the dish');
    }
  };

  const { mutate, isError: isMutationError } = useMutation(deleteDish);

  const { isLoading, isError, refetch } = useQuery({
    queryKey: ['dishes'],
    queryFn: fetchDishes,
  });

  if (isLoading) return <Loader />;
  if (isError) return <div>Error</div>;
  if (isMutationError)
    return <Alert severity="error">This is an error alert — check it out!</Alert>;

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
    rowsPerPage - Math.min(rowsPerPage, dishes.length - page * rowsPerPage);

  return (
    <TableContainer component={Paper} style={{ background: 'transparent' }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{ boxShadow: '2px 2px 2px #E0E0E0' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography
              sx={{ margin: '20px 20px 20px 20px', fontWeight: 'bold', fontSize: '18px' }}
            >
              All Dishes
            </Typography>
            <Typography
              sx={{ margin: '20px 20px 20px 20px', fontWeight: 'bold', fontSize: '18px' }}
            >
              <CreateDish refetch={refetch} />
            </Typography>
          </Stack>
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
          ).map(row => {
            return (
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
                    <EditRoundedIcon
                      style={{
                        color: '#000',
                        bottom: '50px',
                        left: '10px',
                      }}
                      onClick={() => {
                        setOpen(true);
                        setDishToUpdate(row);
                      }}
                    />
                  </>
                  <DeleteOutlineRoundedIcon
                    onClick={() => {
                      mutate(row.id);
                      refetch();
                    }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
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
              <EditDish dishToUpdate={dishToUpdate} setOpen={setOpen} refetch={refetch} />
            </DialogContent>
          </Dialog>
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
          style={{ position: 'fixed' }}
        />
      </Table>
    </TableContainer>
  );
};

export default DishesTable;
