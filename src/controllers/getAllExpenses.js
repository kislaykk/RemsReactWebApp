import axios from 'axios';

const getAllExpenses = ({ tokens }) => new Promise((resolve, reject) => {
  axios({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
    baseURL: process.env.REACT_APP_URL,
    method: 'get',
    url: '/expenditure/expInc',
  })
    .then((response) => { resolve(response.data); })
    .catch((error) => {
      reject(error);
    });
});

export default getAllExpenses;
