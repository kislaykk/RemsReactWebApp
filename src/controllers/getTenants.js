import axios from 'axios';

const getTenants = ({ tokens }, id) => new Promise((resolve, reject) => {
  axios({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
    baseURL: process.env.REACT_APP_URL,
    method: 'post',
    url: '/property/tenants',
    data: {
      id,
    },
  })
    .then((response) => { resolve(response.data); })
    .catch((error) => {
      reject(error);
    });
});

export default getTenants;
