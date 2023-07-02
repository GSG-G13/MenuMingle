import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { SignupSchema } from '../utils/validations';
import { BasicSelect, Copyright } from '../components';
import SignupImage from '../assets/signupbg.png';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const SignUp: React.FC = () => {
  const [role, setRole] = React.useState<string>('');
  const [errorToThrow, setErrorToThrow] = React.useState<any>();

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formData = {
      username: data.get('username'),
      password: data.get('password'),
      role: +role,
    };

    const result = SignupSchema.validate(formData);

    const { error } = result;
    if (error) {
      // Handle validation error
      setErrorToThrow(error.details[0]);
    } else {
      // Data is valid, proceed with submission
      try {
        await axios.post(
          `${serverUrl}/api/v1/auth/register`,
          {
            username: data.get('username'),
            password: data.get('password'),
            roleId: +role,
          },
          { withCredentials: true },
        );

        navigate('/login');
      } catch (err: any) {
        throw new Error(err);
      }
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${SignupImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container component="main" maxWidth="xs" sx={{ marginTop: '0' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: '0 !important',
            paddingTop: '50px !important',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              m: 1,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 3,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <BasicSelect role={role} setRole={setRole} />
              </Grid>
            </Grid>
            {errorToThrow && (
              <Typography variant="body2" color="error">
                {errorToThrow.message}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#FA4A0C' }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Copyright sx={{ mt: 5 }} />
    </div>
  );
};

export default SignUp;
