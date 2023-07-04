import { Box, Typography, Button } from '@mui/material';
import { ErrorPageInterface } from '../utils';

const ErrorPage = ({ status, imgUrl }: ErrorPageInterface): JSX.Element => {
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
        style={{ width: '90%', marginBottom: '20px', borderRadius: '20%' }}
      />
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
