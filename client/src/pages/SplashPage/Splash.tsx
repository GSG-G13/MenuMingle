/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo';
import './SplashPage.css';

const SplashPage = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

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
