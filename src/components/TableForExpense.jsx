/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import {
  Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Paper, TableContainer, Typography, IconButton,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import CancelIcon from '@material-ui/icons/Cancel';
import React from 'react';
import deleteExpediture from '../controllers/deleteExpenditure';
import Token from '../context/token';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const GenerateRows = ({
  expenditures, setReload, propertyId, reload,
}) => {
  const token = React.useContext(Token);
  const [dis, setDis] = React.useState(false);
  return (
    <TableBody>
      {expenditures.map((row) => (
        <TableRow key={row.id}>
          <TableCell align="right">
            {
            row.cost >= 0 ? (<Typography style={{ color: green[500] }}>{row.cost}</Typography>) : (<Typography color="secondary">{row.cost}</Typography>)
          }
          </TableCell>
          <TableCell align="right">{row.notes.details}</TableCell>
          <TableCell align="right">{row.notes.date}</TableCell>
          <TableCell align="center">
            <IconButton
              color="secondary"
              disabled={dis}
              onClick={async () => {
                try {
                  setDis(true);
                  const res = await deleteExpediture(token, row.id, propertyId);
                  alert(res.data.message);
                  const r = reload;
                  setDis(false);
                  setReload((r + 1) % 2);
                } catch (err) {
                  alert(err);
                }
              }}
            >
              <CancelIcon />
            </IconButton>

          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
const TableForExpense = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="right"><Typography variant="h6">cost</Typography></TableCell>
            <TableCell align="right"><Typography variant="h6">notes</Typography></TableCell>
            <TableCell align="right"><Typography variant="h6">date</Typography></TableCell>
          </TableRow>
        </TableHead>
        <GenerateRows expenditures={props.expenditures} propertyId={props.propertyId} setReload={props.setReload} reload={props.reload} />
      </Table>
    </TableContainer>
  );
};

export default TableForExpense;
