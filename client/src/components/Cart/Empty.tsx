import { Typography, Grid } from '@mui/material';
import empty from '../../assets/emptycart2.png';

const EmptyCart = () => {
  return (
    <Grid
      direction="column"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',
      }}
    >
      <img src={empty} alt="No Items" style={{ width: '90%' }} />
      <Typography
        sx={{ textAlign: 'center', fontSize: '16px', marginTop: '10px' }}
      >
        Hungry? Let's fill your plate!
      </Typography>
    </Grid>
  );
};

export default EmptyCart;
