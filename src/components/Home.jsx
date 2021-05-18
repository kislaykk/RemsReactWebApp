/* eslint-disable no-unused-vars */
import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import CustomAppBar from './CustomiedAppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/mainImage.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <CustomAppBar />
    </div>
  );
};

export default Home;
