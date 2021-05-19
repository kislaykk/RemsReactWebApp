/* eslint-disable max-len */
import {
  Button, Grid, TextField, Typography,
} from '@material-ui/core';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ContainerComponentCredential from './ContainerComponentCredential';
import Token from '../context/token';
import addProperty from '../controllers/addProperty';

const AddProperty = () => {
  const [loading, setLoading] = React.useState(false);
  const tokens = React.useContext(Token);
  const formik = useFormik({
    initialValues: {
      name: '',
      street: '',
      locality: '',
      city: '',
      state: '',
      pin: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'minimum 3 and maximum 25 characters').max(25, 'minimum 3 and maximum 25 characters').required('Required'),
      street: Yup.string().min(3, 'minimum 3 and maximum 25 characters').max(25, 'minimum 3 and maximum 25 characters').required('Required'),
      locality: Yup.string().min(3, 'minimum 3 and maximum 25 characters').max(25, 'minimum 3 and maximum 25 characters').required('Required'),
      city: Yup.string().min(3, 'minimum 3 and maximum 25 characters').max(25, 'minimum 3 and maximum 25 characters').required('Required'),
      state: Yup.string().min(3, 'minimum 3 and maximum 25 characters').max(25, 'minimum 3 and maximum 25 characters').required('Required'),
      pin: Yup.number().integer().positive().required('Required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await addProperty(tokens, values);
        if (response.status === 200 && response.data) alert(response.data.message);
      } catch (error) {
        alert(error.message);
      }
      setLoading(false);
      formik.handleReset();
    },
  });
  return (

    <ContainerComponentCredential>
      <div>
        <HomeWorkIcon color="primary" style={{ background: 'white', fontSize: 50 }} />
      </div>
      <Typography variant="h6">
        Add Property
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth id="name" name="name" label="Property Name" variant="outlined" type="text" required onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
            {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="street" name="street" label="street" variant="outlined" type="text" required onChange={formik.handleChange} value={formik.values.street} onBlur={formik.handleBlur} />
            {formik.touched.street && formik.errors.street ? (<div>{formik.errors.street}</div>) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="locality" name="locality" label="locality" variant="outlined" type="text" required onChange={formik.handleChange} value={formik.values.locality} onBlur={formik.handleBlur} />
            {formik.touched.locality && formik.errors.locality ? (<div>{formik.errors.locality}</div>) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="city" name="city" label="city" variant="outlined" type="text" required onChange={formik.handleChange} value={formik.values.city} onBlur={formik.handleBlur} />
            {formik.touched.city && formik.errors.city ? (<div>{formik.errors.city}</div>) : null}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="state" name="state" label="state" variant="outlined" type="text" required onChange={formik.handleChange} value={formik.values.state} onBlur={formik.handleBlur} />
            {formik.touched.state && formik.errors.state ? (<div>{formik.errors.state}</div>) : null}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="pin" name="pin" label="pin" variant="outlined" type="text" required onChange={formik.handleChange} value={formik.values.pin} onBlur={formik.handleBlur} />
            {formik.touched.pin && formik.errors.pin ? (<div>{formik.errors.pin}</div>) : null}
          </Grid>
          <Grid item xs={12} align="center">
            <Button type="submit" color="primary" variant="contained" disabled={loading}>
              { loading ? 'loading' : 'register'}
            </Button>
          </Grid>
        </Grid>
      </form>

    </ContainerComponentCredential>
  );
};

export default AddProperty;
