import { Typography } from '@mui/material';
import Picture from '../components/watingRoomComponent/Picture';
import VerticalLinearStepper from '../components/watingRoomComponent/Status';

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
