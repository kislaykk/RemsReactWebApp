import axios from 'axios';

const getExpenditure = ({ tokens }, propertyId) => new Promise((resolve, reject) => {
  axios({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
    baseURL: process.env.REACT_APP_URL,
    method: 'get',
    url: `/expenditure/${propertyId}`,
  })
    .then((response) => { resolve(response.data); })
    .catch((error) => {
      reject(error);
    });
});

export default getExpenditure;
