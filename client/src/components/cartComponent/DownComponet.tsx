import { Margin } from '@mui/icons-material';
import * as core from '@mui/material';

const { Card, Button, Typography } = core;

const DownComponet = () => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Card
        sx={{
          position: 'fixed',
          bottom: '20px',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            paddingLeft: '20px',
            paddingBottom: '5px',
          }}
        >
          Total: $200
        </Typography>

        <Button
          sx={{
            backgroundColor: '#FF7A00',
            width: '90%',
            margin: 'auto 20px',
            height: '45px',
          }}
        >
          Checkout
        </Button>
      </Card>
    </div>
  );
};

export default DownComponet;
