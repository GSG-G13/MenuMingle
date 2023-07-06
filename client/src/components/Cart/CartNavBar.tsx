import { AppBar, Box, Toolbar, Typography, IconButton, CssBaseline } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useNavigate } from 'react-router-dom';

const CartNavBar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#fff', marginBottom: '10px' }}>
        <Toolbar variant="dense">
          <IconButton onClick={() => navigate('/menu')}>
            <MenuOpenIcon />
          </IconButton>
          <Typography variant="h6" color="#000" component="span">
            Orders
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default CartNavBar;
