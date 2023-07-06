import { Grid, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { cartItemInterface } from '../../utils';

const CartItem = ({
  item,
  onIncrement,
  onDecrement,
  onDelete,
}: cartItemInterface): JSX.Element => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      style={{ width: '100%', marginLeft: '20px', marginTop: '5px' }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
        border="1px solid #ccc"
        borderRadius={4}
        position="relative"
      >
        <Box display="flex" alignItems="center">
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: '50px',
              height: '50px',
              marginRight: '16px',
              borderRadius: '20%',
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontSize: '20px' }}>
              {item.name}
            </Typography>
            <Typography variant="subtitle2">${item.price}</Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <RemoveIcon
            onClick={onDecrement}
            style={{
              borderColor: '#000',
              color: '#FF7A00',
            }}
          />
          <Typography
            variant="body1"
            style={{ margin: '0 8px', fontSize: '20px', fontWeight: 'bold' }}
          >
            {item.count}
          </Typography>
          <AddIcon
            onClick={onIncrement}
            style={{
              borderColor: '#000',
              color: '#FF7A00',
            }}
          />
        </Box>
        <DeleteSweepIcon
          onClick={onDelete}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            color: '#808080',
            height: '20px',
          }}
        />
      </Box>
    </Grid>
  );
};

export default CartItem;
