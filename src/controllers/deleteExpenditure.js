import axios from 'axios';

const deleteexpenditure = ({ tokens }, id, propertyId) => new Promise((resolve, reject) => {
  axios({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
    baseURL: process.env.REACT_APP_URL,
    method: 'delete',
    url: '/expenditure',
    data: {
      id,
      propertyId: Number.parseInt(propertyId, 10),
    },
  })
    .then((response) => {
      resolve(response);
    })
    .catch((err) => {
      reject(err);
    });
});
export default deleteexpenditure;
