import axios from 'axios';

const getRequestForProperty = ({ tokens }, propertyId) => new Promise((resolve, reject) => {
  axios({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
    baseURL: process.env.REACT_APP_URL,
    method: 'post',
    url: '/request/get',
    data: {
      propertyId,
    },

  })
    .then((response) => { resolve(response.data); })
    .catch((error) => {
      reject(error);
    });
});

export default getRequestForProperty;
