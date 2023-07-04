import { Box, Typography, Button } from '@mui/material';

const ErrorPage = ({ status, imgUrl }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <img src={imgUrl} alt="Error" style={{ width: '200px', marginBottom: '20px' }} />
      <Typography variant="h4" align="center" gutterBottom>
        Error {status}
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.reload()}
      >
        Refresh Page
      </Button>
    </Box>
  );
};

export default ErrorPage;
