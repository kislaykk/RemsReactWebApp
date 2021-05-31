import axios from 'axios';

const acceptRequest = ({ tokens }, id, propertyId) => new Promise((resolve, reject) => {
  axios({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
    baseURL: process.env.REACT_APP_URL,
    method: 'post',
    url: '/request/accept',
    data: {
      propertyId,
      id,
    },
  })
    .then((response) => {
      resolve(response);
    })
    .catch((err) => {
      reject(err);
    });
});
export default acceptRequest;
