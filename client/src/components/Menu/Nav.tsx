import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        marginBottom: '20px',
        overflow: 'hidden',
      }}
    >
      <Toolbar>
        <img src={logo} alt="Logo" style={{ marginRight: '10px', height: '50px' }} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: 'black', alignItems: 'center' }}
        >
          Menu
        </Typography>
        <IconButton
          color="inherit"
          aria-label="Orders"
          sx={{ color: 'black' }}
          onClick={() => {
            navigate('/cart');
          }}
        >
          <FastfoodOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
