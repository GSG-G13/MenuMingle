import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const Status = () => {
  const location = useLocation();
  const goToCompletion = useNavigate();
  const {
    state: { cartId },
  } = location;

  const getOrderStatus = async (cartInput: number) => {
    const getCartStatus = await axios.get(
      `${serverUrl}/api/v1/cart/get-cart-status?cartId=${cartInput}`,
      {
        withCredentials: true,
      },
    );

    return getCartStatus.data.data.status;
  };

  const steps = ['Order is received', 'Order is being prepared', 'Order is Ready'];
  const [timer, setTimer] = useState(0);
  const { data } = useQuery({
    queryFn: () => getOrderStatus(cartId),
    queryKey: ['ordersStatus'],
    refetchInterval: 12000,
    refetchIntervalInBackground: false,
  });
  useEffect(() => {
    setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
  }, []);
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };
  if (data === 'done') {
    goToCompletion('/go-to-completion');
  }

  return (
    <Box sx={{ width: 'calc(100% - 20px)', marginLeft: '20px' }}>
      <>
        <p>Time elapsed: {formatTime(timer)}</p>
        <p>Order status: {data}</p>
        <Stepper activeStep={1} orientation="vertical">
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </>
    </Box>
  );
};
export default Status;
