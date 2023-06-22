/* eslint-disable import/no-extraneous-dependencies */
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
} from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const CartNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
        <Toolbar variant="dense">
          <IconButton color="#fff">
            <MenuOpenIcon />
          </IconButton>
          <Typography variant="h6" color="#000" component="div">
            Orders
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default CartNavBar;
