/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import getTenants from '../controllers/getTenants';
import removeTenant from '../controllers/removeTenant';

import Token from '../context/token';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(9),
  },
}));
const TenantList = ({ tenants, lo, setLo }) => {
  const tokens = React.useContext(Token);
  return (
    <div>
      {tenants.map((tenant) => (
        <li>
          {tenant.leasedById}
          <Button
            color="secondary"
            variant="contained"
            onClick={async () => {
              try {
                const l = lo;
                const { data } = await removeTenant(tokens, tenant.propertyId, tenant.leasedById);
                alert(data.message);
                setLo(l + 1);
              } catch (error) {
                alert(error.message);
              }
            }}
          >
            Remove tenant
          </Button>
        </li>
      ))}
    </div>
  );
};
const ListTenants = ({ propertyId }) => {
  const classes = useStyles();
  const tokens = React.useContext(Token);
  // eslint-disable-next-line no-unused-vars
  const [lo, setLo] = React.useState(0);
  const [tenants, setTenants] = React.useState([]);
  React.useEffect(async () => {
    try {
      const ten = await getTenants(tokens, propertyId);
      setTenants(ten.tenants);
    } catch (error) {
      alert(error.message);
    }
  }, [lo]);
  return (
    <div className={classes.root}>
      {tenants.length === 0
        ? (
          <div>
            No tenants for this property
          </div>
        )
        : (
          <ul>
            <TenantList tenants={tenants} lo={lo} setLo={setLo} />
          </ul>
        )}
    </div>
  );
};
export default ListTenants;
