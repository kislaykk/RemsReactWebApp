/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
/* eslint-disable max-len */
import {
  Button, Grid, TextField, Typography,
} from '@material-ui/core';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContainerComponentCredential from './ContainerComponentCredential';
import registerController from '../controllers/registerController';

const Register = () => {
  const [loading, setLoading] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phoneNo: '',
      password: '',
      basedAt: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'minimum 3 and maximum 25 characters').max(25, 'minimum 3 and maximum 25 characters').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phoneNo: Yup.number().integer().positive().required('Required'),
      password: Yup.string().min(8, 'minimum 8 and maximum 20 characters').max(20, 'minimum 8 and maximum 20 characters').required('Required'),
      basedAt: Yup.string(),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await registerController(values);
        if (response.status === 200 && response.data && response.data.success) alert('Registration successful. sign in now');
        else if (response.status === 200) alert(response.data.message);
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
        <AccountCircleIcon color="primary" style={{ background: 'white', fontSize: 50 }} />
      </div>
      <Typography variant="h6">
        Register
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="name" name="name" label="Name" variant="outlined" type="text" required onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
            {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="phoneNo" name="phoneNo" label="Phone No" variant="outlined" type="text" required onChange={formik.handleChange} value={formik.values.phoneNo} onBlur={formik.handleBlur} />
            {formik.touched.phoneNo && formik.errors.phoneNo ? (<div>{formik.errors.phoneNo}</div>) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="email" name="email" label="Email" variant="outlined" type="email" required onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="password" name="password" label="Password" variant="outlined" type="password" required onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
            {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="basedAt" name="basedAt" label="Based At" variant="outlined" type="text" helperText="city you live at" onChange={formik.handleChange} value={formik.values.basedAt} onBlur={formik.handleBlur} />
            {formik.touched.basedAt && formik.errors.basedAt ? (<div>{formik.errors.basedAt}</div>) : null}
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

export default Register;
