/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import { Typography } from '@material-ui/core';
import getExpenditure from '../controllers/getExpenditure';
import LoadingScreen from './LoadingScreen';
import Token from '../context/token';
import TableForExpense from './TableForExpense';

const ProduceExpTable = (props) => {
  const tokens = React.useContext(Token);
  const [loading, setLoading] = React.useState(true);
  const [response, setResponse] = React.useState({});
  React.useEffect(async () => {
    try {
      const res = await getExpenditure(tokens, props.propertyId);
      setResponse(res);
      setLoading(false);
    } catch (err) {
      alert(err.message);
    }
  }, [props.reload]);
  return (
    <div>
      {loading ? (<LoadingScreen />) : (response.expenditures.length ? (<TableForExpense setReload={props.setReload} reload={props.reload} propertyId={props.propertyId} expenditures={response.expenditures} />) : (<Typography>No expenditures yet</Typography>))}
    </div>
  );
};
export default ProduceExpTable;
