import * as core from '@mui/material';

const { Card, Button, Typography } = core;

const DownComponent = () => {
  return (
    <Button
      sx={{
        backgroundColor: '#FF7A00',
        width: '90%',
        margin: 'auto 20px',
        height: '45px',
        color: '#000',
        position: 'fixed',
        bottom: '10px',
      }}
    >
      Checkout
    </Button>
  );
};

export default DownComponent;
