import { Typography } from '@mui/material';
import Picture from '../components/watingRoomComponent/Picture';
import VerticalLinearStepper from '../components/watingRoomComponent/Status';
import Navbar from '../components/watingRoomComponent/NavBar';

const WaitingRoom = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        widows: '80%',
        gap: '20px',
        justifyContent: 'center',
      }}
    >
      <Navbar />
      <Picture />
      <VerticalLinearStepper />
      <Typography
        align="center"
        sx={{ color: '#FE724C', fontWeight: 'bold', marginTop: '20px' }}
      >
        Thanks for choosing our services
      </Typography>
    </div>
  );
};

export default WaitingRoom;
