/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
const CardComponent = (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.card}>

      {props.children}

    </Container>
  );
};

export default CardComponent;
