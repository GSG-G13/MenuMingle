/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import logo from '../../assets/logo.png';

import './SplashPage.css';

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

  return (
    <div>
      <Box
        className={`splash-box ${isAnimating ? 'animate' : ''}`}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <img src={logo} alt="Splash" onClick={handleClick} />
      </Box>
    </div>
  );
};

export default SplashPage;
