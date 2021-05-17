import {
  Button, Grid, TextField, Typography,
} from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContainerComponentCredential from './ContainerComponentCredential';

const Register = () => (

  <ContainerComponentCredential>
    <div>
      <AccountCircleIcon color="primary" style={{ background: 'white', fontSize: 50 }} />
    </div>
    <Typography variant="h6">
      Register
    </Typography>
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Name" variant="outlined" type="text" required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Phone No" variant="outlined" type="text" required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Email" variant="outlined" type="email" required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Password" variant="outlined" type="password" required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Based At" variant="outlined" type="text" helperText="city you live at" />
        </Grid>
        <Grid item xs={12} align="center">
          <Button type="submit" color="primary" variant="contained">Register</Button>
        </Grid>
      </Grid>
    </form>

  </ContainerComponentCredential>
);

export default Register;
