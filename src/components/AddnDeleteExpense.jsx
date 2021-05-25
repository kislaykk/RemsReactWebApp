/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */

import {
  Grid, TextField, Typography, Container, makeStyles, IconButton,
} from '@material-ui/core';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ProduceExpTable from './ProduceExpTable';
import Token from '../context/token';
import addExpenditure from '../controllers/addExpenditure';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
  },
}));

const CardComponent = (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.card}>

      {props.children}

    </Container>
  );
};

// eslint-disable-next-line no-unused-vars
const AddnDeleteExpense = (props) => {
  const [loading, setLoading] = React.useState(false);
  const tokens = React.useContext(Token);
  const [reload, setReload] = React.useState(0);
  const formik = useFormik({
    initialValues: {
      cost: '',
      note: '',
      date: '',
    },
    validationSchema: Yup.object({
      cost: Yup.number().integer().required('Required'),
      note: Yup.string().min(3, 'minimum 3 and maximum 255 characters').max(255, 'minimum 3 and maximum 255 characters').required('Required'),
      date: Yup.date().required('Required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await addExpenditure(tokens, values, props.propertyId);
        if (response.status === 200 && response.data) alert(response.data.message);
        const rel = reload;
        setReload((rel + 1) % 2);
      } catch (error) {
        alert(error.message);
      }

      setLoading(false);
      formik.handleReset();
    },
  });
  return (
    <div>
      <CardComponent>
        <div>
          <AccountBalanceWalletIcon color="primary" style={{ background: 'white', fontSize: 50 }} />
        </div>
        <Typography variant="h6">
          Manage Expenses
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <TextField fullWidth id="cost" name="cost" label="cost(+ve/-ve)" variant="outlined" type="text" required onChange={formik.handleChange} value={formik.values.cost} onBlur={formik.handleBlur} />
              {formik.touched.cost && formik.errors.cost ? (<div>{formik.errors.cost}</div>) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth id="note" name="note" label="note" variant="outlined" type="text" required onChange={formik.handleChange} value={formik.values.note} onBlur={formik.handleBlur} />
              {formik.touched.note && formik.errors.note ? (<div>{formik.errors.note}</div>) : null}
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth id="date" name="date" label="Date(YYYY-MM-DD)" variant="outlined" type="text" required onChange={formik.handleChange} value={formik.values.date} onBlur={formik.handleBlur} />
              {formik.touched.date && formik.errors.date ? (<div>{formik.errors.date}</div>) : null}
            </Grid>
            <Grid item xs={12} sm={1}>
              <IconButton type="submit" color="primary" variant="contained" disabled={loading}>
                <AddCircleIcon />
              </IconButton>
            </Grid>
          </Grid>
        </form>
      </CardComponent>
      <ProduceExpTable propertyId={props.propertyId} reload={reload} setReload={setReload} />
    </div>
  );
};
export default AddnDeleteExpense;
