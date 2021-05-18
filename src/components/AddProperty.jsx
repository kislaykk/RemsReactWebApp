import {
  Button, Grid, TextField, Typography,
} from '@material-ui/core';
import React from 'react';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ContainerComponentCredential from './ContainerComponentCredential';

const AddProperty = () => (

  <ContainerComponentCredential>
    <div>
      <HomeWorkIcon color="primary" style={{ background: 'white', fontSize: 50 }} />
    </div>
    <Typography variant="h6">
      Add Property
    </Typography>
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label="Property Name" variant="outlined" type="text" required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="street" variant="outlined" type="text" required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="locality" variant="outlined" type="text" required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="city" variant="outlined" type="text" required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="state" variant="outlined" type="text" required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="pin" variant="outlined" type="text" required />
        </Grid>
        <Grid item xs={12} align="center">
          <Button type="submit" color="primary" variant="contained">Add Home</Button>
        </Grid>
      </Grid>
    </form>

  </ContainerComponentCredential>
);

export default AddProperty;
