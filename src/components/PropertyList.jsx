/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import {
  Typography, Container, makeStyles, CardContent, CardActions, Button,
} from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
import PropertyCard from './PropertyCard';
import addRequest from '../controllers/addRequest';
import Token from '../context/token';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
  },
  huntCard: {
    marginBottom: theme.spacing(2),
  },
}));
const makeRequest = async (tokens, propertyId, requestType) => {
  try {
    const response = await addRequest(tokens, propertyId, requestType);
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
  }
};
const HuntProperty = ({ property }) => {
  const classes = useStyles();
  const tokens = React.useContext(Token);
  return (
    <Card className={classes.huntCard}>
      <CardContent>
        <Typography>
          <strong>
            name:
          </strong>
          {property.name}
        </Typography>
        <Typography>
          <strong>
            street:
          </strong>
          {property.address.street}
        </Typography>
        <Typography>
          <strong>locality:</strong>
          {property.address.locality}
        </Typography>
        <Typography>
          <strong>
            city:
          </strong>
          {property.address.city}
        </Typography>
        <Typography>
          <strong>
            state:
          </strong>
          {property.address.state}
        </Typography>
        <Typography>
          <strong>
            pin:
          </strong>
          {property.address.pin}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => {
            makeRequest(tokens, property.id, 1);
          }}
        >
          Request to lease
        </Button>
      </CardActions>
    </Card>
  );
};
const PropertyList = ({ properties, stateChange, all }) => {
  const classes = useStyles();
  let listItems;
  if (!all) listItems = properties.map((property) => <PropertyCard property={property} stateChange={stateChange} />);
  else listItems = properties.map((property) => <HuntProperty property={property} />);
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
