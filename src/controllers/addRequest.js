import axios from 'axios';

const addRequest = ({ tokens }, propertyId, requestType) => new Promise((resolve, reject) => {
  axios({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
    baseURL: process.env.REACT_APP_URL,
    method: 'post',
    url: '/request',
    data: {
      propertyId,
      requestType,
    },
  })
    .then((response) => {
      resolve(response);
    })
    .catch((err) => {
      reject(err);
    });
});
export default addRequest;
