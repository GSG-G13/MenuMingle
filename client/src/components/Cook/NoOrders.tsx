import { Typography, Grid } from '@mui/material';
import Rest from '../../assets/Rest.gif';

const NoOrders = () => {
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
      <img
        src={Rest}
        alt="No Items"
        style={{
          width: '90%',
          borderRadius: '2px',
          boxShadow: ' 5px 5px 5px #aaaaaa',
        }}
      />
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '18px',
          marginTop: '20px',
          fontWeight: 'bold',
        }}
      >
        Presently, there are no orders in need of culinary attention. Rest and recharge,
        respected chefs.
      </Typography>
    </Grid>
  );
};

export default NoOrders;
