/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import logo from '../assets/logo.png';

const SplashPage = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const customerId = localStorage.getItem('customerId') as string;
    if (!customerId) {
      localStorage.setItem('customerId', v4());
    }
  });

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/menu');
    }, 1000);
  };
  useEffect(() => {
    setTimeout(() => {
      handleClick();
    }, 1000);
  }, []);
  return (
    <div>
      <Box
        className={`splash-box ${isAnimating ? 'animate' : ''}`}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          '&&.splash-box ': {
            transition: 'opacity 1s ease-in-out',
          },
          '&&.splash-box.animate': {
            opacity: '0',
          },
        }}
      >
        <img src={logo} alt="Splash" onClick={() => handleClick()} />
      </Box>
    </div>
  );
};

export default SplashPage;
