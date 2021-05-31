import { makeStyles } from '@material-ui/core';
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import getClientDetails from '../controllers/getClientDetails';
import getAllExpenses from '../controllers/getAllExpenses';
import Token from '../context/token';

const jwt = require('jsonwebtoken');

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(9),
  },
}));
const ClientHome = () => {
  const classes = useStyle();
  const tokens = React.useContext(Token);
  const [name, setName] = React.useState('');
  const [exp, setExp] = React.useState({
    expenditure: 0,
    income: 0,
  });
  React.useEffect(async () => {
    const { userId } = jwt.decode(tokens.tokens.accessToken);
    const { details } = await getClientDetails(userId);
    const exp1 = await getAllExpenses(tokens);
    setName(details.name);
    setExp({
      ...exp,
      expenditure: exp1.exp.expenditure,
      income: exp1.exp.income,
    });
  }, []);
  return (
    <div className={classes.root}>
      <h3>
        Hello,
        {name}
        !
      </h3>
      <PieChart
        data={[
          { title: `expenditure: ${exp.expenditure}`, value: Math.abs(exp.expenditure), color: 'red' },
          { title: `income: ${exp.income}`, value: exp.income, color: 'green' },
        ]}
        center={[50, 15]}
        radius={15}
      />
    </div>

  );
};
export default ClientHome;
