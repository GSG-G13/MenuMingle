import * as React from 'react';
import Joi from 'joi';

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
  const [errors, setErrors] = React.useState({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const schema = Joi.object({
      username: Joi.string().min(3).max(30).required().lowercase(),
      password: Joi.string()
        .min(8)
        .max(30)
        .required()
        .pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        ),
      role: Joi.number().required(),
    });

    const formData = {
      username: data.get('username'),
      password: data.get('password'),
      role: +role,
    };

    const result = schema.validate(formData);

    const { error } = result;
    if (error) {
      // Handle validation error
      setErrors(error.details[0]);
    } else {
      // Data is valid, proceed with submission
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
            {errors && (
              <Typography variant="body2" color="error">
                {errors.message}
              </Typography>
            )}
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
