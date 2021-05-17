import {
  Button, Grid, TextField, Typography,
} from '@material-ui/core';
import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import ContainerComponentCredential from './ContainerComponentCredential';

const SignIn = () => (

  <ContainerComponentCredential>
    <div>
      <LockIcon color="primary" style={{ background: 'white', fontSize: 50 }} />
    </div>
    <Typography variant="h6">
      Sign In
    </Typography>
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label="Email" variant="outlined" type="email" required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Password" variant="outlined" type="password" required />
        </Grid>
        <Grid item xs={12} align="center">
          <Button type="submit" color="primary" variant="contained">Register</Button>
        </Grid>
      </Grid>
    </form>

  </ContainerComponentCredential>
);

export default SignIn;
