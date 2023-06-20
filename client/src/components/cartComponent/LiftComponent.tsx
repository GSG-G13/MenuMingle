import * as core from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const { Typography, Stack } = core;

// interface Lif

const LiftComponent = ({ countNumber, setCountNumber }) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        height: '5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <AddIcon
        sx={{
          margin: '0 !important',
          backgroundColor: '#FF7A00',
          borderRadius: '50px',
          color: '#fff',
          width: '22px',
          height: '22px',
          padding: '4px',
        }}
        onClick={() => {
          setCountNumber(countNumber + 1);
        }}
      />

      <Typography
        variant="subtitle1"
        sx={{ margin: '0 !important', fontWeight: 'bold' }}
      >
        {countNumber}
      </Typography>
      <RemoveIcon
        sx={{
          margin: '0 !important',
          backgroundColor: '#FF7A00',
          borderRadius: '50px',
          color: '#fff',
          width: '22px',
          height: '22px',
          padding: '4px',
        }}
        onClick={() => {
          setCountNumber(countNumber - 1);
        }}
      />
    </Stack>
  );
};

export default LiftComponent;
