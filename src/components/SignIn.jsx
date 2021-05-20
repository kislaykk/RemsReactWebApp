/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable max-len */
import {
  Button, Grid, TextField, Typography,
} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LockIcon from '@material-ui/icons/Lock';
import Tokens from '../context/token';
import signInController from '../controllers/signInController';
import ContainerComponentCredential from './ContainerComponentCredential';

const SignIn = () => {
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const location = useLocation();
  const tokens = React.useContext(Tokens);
  const formik = useFormik({
    initialValues: {
      email: 'test2@gmail.com',

      password: 'Done4ever',

    },
    validationSchema: Yup.object({

      email: Yup.string().email('Invalid email address').required('Required'),

      password: Yup.string().required('Required'),

    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await signInController(values);
        if (response.status === 200 && response.data && response.data.success) {
          tokens.tokens = {
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
          };
          const from = { pathname: '/user' };
          history.replace(from);
        } else if (response.status === 200) alert(response.data.message);
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
        <LockIcon color="primary" style={{ background: 'white', fontSize: 50 }} />
      </div>
      <Typography variant="h6">
        Sign In
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth id="email" name="email" label="Email" variant="outlined" type="email" required onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
            {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="password" name="password" label="Password" variant="outlined" type="password" required onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
            {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
          </Grid>
          <Grid item xs={12} align="center">
            <Button type="submit" color="primary" variant="contained" disabled={loading}>
              { loading ? 'loading' : 'sign in'}
            </Button>
          </Grid>
        </Grid>
      </form>

    </ContainerComponentCredential>
  );
};

export default SignIn;
