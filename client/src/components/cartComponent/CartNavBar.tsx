/* eslint-disable import/no-extraneous-dependencies */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CartNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Details Cart
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default CartNavBar;
