import * as core from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonSectionProps } from '../../utils';

const { Button } = core;

const DownComponent: FC<ButtonSectionProps> = () => {
  const goToWaitingRoom = useNavigate();

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
      onClick={() => {
        goToWaitingRoom('/payment');
      }}
    >
      Checkout
    </Button>
  );
};

export default DownComponent;
