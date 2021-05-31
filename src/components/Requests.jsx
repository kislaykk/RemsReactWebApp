/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import getAllRequestsForAClient from '../controllers/getAllRequestsForAClient';
import rejectRequest from '../controllers/rejectRequest';
import acceptRequest from '../controllers/acceptRequest';
import getClientDetails from '../controllers/getClientDetails';
import Token from '../context/token';
import LoadingScreen from './LoadingScreen';

const useStyle = makeStyles((theme) => ({
  requestStyle: {
    marginTop: theme.spacing(9),
  },
}));

const ListItems = ({ req1, lo, setLo }) => {
  const token = React.useContext(Token);
  return (
    <div>
      {req1.map((re) => (
        <li key={`${re.request.id}`}>
          {`${re.property} `}
          is requested to be
          {re.request.requestType === 1 ? ' rented' : ' bought'}
          by
          {` ${re.request.clientId}`}
          <Button
            color="secondary"
            variant="contained"
            onClick={async () => {
              try {
                let l = lo;
                const response = await rejectRequest(token, re.request.id);

                alert(response.data.message);
                setLo(++l);
              } catch (err) {
                alert(err.message);
              }
            }}
          >
            Reject
          </Button>
          <Button
            style={{
              backgroundColor: 'green',
              color: 'white',
            }}
            variant="contained"
            onClick={async () => {
              try {
                let l = lo;
                const response = await acceptRequest(token, re.request.id, re.request.propertyId);

                alert(response.data.message);
                setLo(++l);
              } catch (err) {
                alert(err.message);
              }
            }}
          >
            Accept
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={async () => {
              try {
                const { details } = await getClientDetails(re.request.clientId);
                alert(`name:${details.name}\nemail:${details.email}\nphoneNo:${details.phoneNo}\nbased at:${details.basedAt}`);
              } catch (error) {
                alert(error.message);
              }
            }}
          >
            Details
          </Button>
        </li>
      ))}

    </div>
  );
};
const RequestList = ({ req, lo, setLo }) => (
  <div>
    <ul>
      <ListItems req1={req} lo={lo} setLo={setLo} />
    </ul>

  </div>
);
const Requests = () => {
  const classes = useStyle();
  const token = React.useContext(Token);
  const [req, setReq] = React.useState(['loading']);
  const [lo, setLo] = React.useState(0);
  React.useEffect(async () => {
    const r = await getAllRequestsForAClient(token);
    setReq(r);
  }, [lo]);
  return (
    <div className={classes.requestStyle}>
      {req[0] === 'loading' ? <LoadingScreen /> : (req.length === 0) ? <div>No requests yet</div> : <RequestList req={req} lo={lo} setLo={setLo} />}
    </div>
  );
};

export default Requests;
