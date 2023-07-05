import { Box, Typography, Button } from '@mui/material';
import { ErrorPageInterface } from '../utils';
import unAuthorized from '../assets/unautherized.webp';
import notFound from '../assets/notFound.webp';
import serverError from '../assets/serverError.webp';

const ErrorPage = ({ status }: ErrorPageInterface): JSX.Element => {
  let imgUrl = notFound;
  if (status === 404) {
    imgUrl = notFound;
  } else if (status === 401) {
    imgUrl = unAuthorized;
  } else if (status === 500) imgUrl = serverError;

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
