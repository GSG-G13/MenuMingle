import { Box } from '@mui/material';
import logo from '../../assets/logo.png';

const SplashPage = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <img src={logo} alt="Splash " />
      </Box>
    </div>
  );
};

export default SplashPage;
