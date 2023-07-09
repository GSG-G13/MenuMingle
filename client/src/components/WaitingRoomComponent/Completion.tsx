import { Typography, Grid } from '@mui/material';
import QRCodeComponent from './QRCodeComponent';

const Completion = () => {
  return (
    <Grid
      direction="column"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
      }}
    >
      <QRCodeComponent />
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '18px',
          marginTop: '20%',
          fontWeight: 'bold',
          color: '#F7941E',
        }}
      >
        We have prepared your order and it is now available for pickup. Please make your
        way to the pickup counter.
      </Typography>
    </Grid>
  );
};

export default Completion;
