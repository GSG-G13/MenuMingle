import { Typography, Grid } from '@mui/material';
import empty from '../../assets/emptycart2.png';

const EmptyCart = () => {
  return (
    <Grid
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
      }}
    >
      <img src={empty} alt="No Items" style={{ width: '90%' }} />
      <Typography sx={{ textAlign: 'center', fontSize: '16px', marginTop: '10px' }}>
        Hungry? Let&apos;s fill your plate!
      </Typography>
    </Grid>
  );
};

export default EmptyCart;
