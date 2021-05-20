/* eslint-disable react/prop-types */
import { Typography, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import PropertyCard from './PropertyCard';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
  },
}));
const PropertyList = ({ properties }) => {
  const classes = useStyles();
  const listItems = properties.map((property) => <PropertyCard property={property} />);
  return (
    <Container maxWidth="sm" className={classes.card}>

      { properties.length
        ? (
          <div>
            {listItems}
          </div>
        )
        : (
          <Typography>
            No properties added yet!
          </Typography>
        )}
    </Container>

  );
};
export default PropertyList;
