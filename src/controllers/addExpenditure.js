import axios from 'axios';

const addExpenditure = ({ tokens }, {
  cost, note, date,
}, propertyId) => new Promise((resolve, reject) => {
  axios({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
    baseURL: process.env.REACT_APP_URL,
    method: 'post',
    url: '/expenditure',
    data: {
      cost,
      note,
      date,
      propertyId,
    },
  })
    .then((response) => {
      resolve(response);
    })
    .catch((err) => {
      reject(err);
    });
});
export default addExpenditure;
