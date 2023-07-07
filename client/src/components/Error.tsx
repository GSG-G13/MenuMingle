import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import notFound from '../assets/notFound1.webp';

const ErrorPage = (): JSX.Element => {
  const navigate = useNavigate();
  const imgUrl = notFound;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <img
        src={imgUrl}
        alt="Error"
        style={{
          width: '90%',
          marginBottom: '20px',
          borderRadius: '50%',
          height: '300px',
        }}
      />
      <Typography variant="body1" align="center" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <ArrowBackIosOutlinedIcon onClick={() => navigate(-1)} sx={{ marginTop: '20px' }} />
    </Box>
  );
};

export default ErrorPage;
