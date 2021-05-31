/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { green, orange } from '@material-ui/core/colors';
import Token from '../context/token';
import deleteProperty from '../controllers/deletProperty';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginBottom: theme.spacing(6),
  },
}));

export default function PropertyCard({ property, stateChange }) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const tokens = React.useContext(Token);
  const history = useHistory();
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteProperty(tokens, { id });
      const { changed } = stateChange;
      setLoading(false);
      stateChange.setChanged((changed + 1) % 2);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };
  return (
    <Card className={classes.root} key={property.id}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {property.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            street:
            {property.address.street}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            locality:
            {property.address.locality}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            city:
            {property.address.city}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            state:
            {property.address.state}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            pin:
            {property.address.pin}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid
          container
          direction="row"
          justify="flex-end"
        >
          <IconButton size="small" color="secondary" variant="contained" disabled={loading} onClick={() => { history.push(`/user/property/tenants?propertyId=${property.id}`); }}>
            <PersonIcon style={{ color: orange[500] }} />
          </IconButton>
          <IconButton size="small" variant="contained" disabled={loading} onClick={() => { history.push(`/user/expense/?propertyId=${property.id}`); }}>
            <MonetizationOnIcon style={{ color: green[500] }} />
          </IconButton>
          <IconButton size="small" color="primary" variant="contained" disabled={loading} onClick={() => { history.push(`/user/property/edit?id=${property.id}&name=${property.name}&street=${property.address.street}&locality=${property.address.locality}&state=${property.address.state}&city=${property.address.city}&pin=${property.address.pin}`); }}>
            <EditIcon />
          </IconButton>
          <IconButton size="small" color="secondary" variant="contained" disabled={loading} onClick={() => handleDelete(property.id)}>
            <DeleteIcon />
          </IconButton>

        </Grid>
      </CardActions>
    </Card>
  );
}
