import { useContext, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
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
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { SignInSchema } from '../utils/validations';
import SignupImage from '../assets/signupbg.png';
import { Copyright } from '../components';
import { authContext } from '../Context/AuthContext';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const Login = () => {
  const { setUser } = useContext(authContext);
  const [errorToThrow, setErrorToThrow] = useState<any>();

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formData = {
      username: data.get('username'),
      password: data.get('password'),
    };

    const result = SignInSchema.validate(formData);

    const { error } = result;

    if (error) {
      // Handle validation error
      setErrorToThrow(error.details[0]);
    } else {
      try {
        const user = await axios.post(
          `${serverUrl}/api/v1/auth/login`,
          {
            username: data.get('username'),
            password: data.get('password'),
          },
          {
            withCredentials: true,
          },
        );
        setUser(user.data.data);

        if (user.data.data.role === 'admin') {
          navigate('/admin');
        } else if (user.data.data.role === 'cook') {
          navigate('/cook');
        }
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpass" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  Dont have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  );
};

export default Login;
