import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo.png';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

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
        <img
          src={logo}
          alt="Logo"
          style={{
            marginRight: '10px',
            marginTop: '10px',
            height: '80px',
            width: '80px',
          }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 2,
            color: 'grey',
            alignItems: 'right',
            fontFamily: 'cursive',
            fontSize: '20px',
          }}
        >
          Welcome back, Let&apos;s kick off another day of success
        </Typography>
        <IconButton
          color="inherit"
          aria-label="Orders"
          sx={{ color: 'black' }}
          onClick={async () => {
            await axios.post(
              `${serverUrl}/api/v1/auth/logout`,
              {},
              {
                withCredentials: true,
              },
            );
            navigate('/login');
          }}
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
