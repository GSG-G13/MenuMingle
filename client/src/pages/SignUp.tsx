import * as React from 'react';

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
import BasicSelect from '../components';

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="/">
        Menu Mingle
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  );
};

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const SignUp = () => {
  const [role, setRole] = React.useState();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const res = await axios.post(`${serverUrl}/api/v1/auth/register`, {
        username: data.get('username'),
        password: data.get('password'),
        roleId: +role,
      });
      window.location.href = '/login';
    } catch (err: any) {
      throw new Error(err);
    }
  };

  return (
    <>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
    </>
  );
};

export default SignUp;
