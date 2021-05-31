import axios from 'axios';

const rejectRequest = ({ tokens }, id) => new Promise((resolve, reject) => {
  axios({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
    baseURL: process.env.REACT_APP_URL,
    method: 'delete',
    url: '/request/reject',
    data: {
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
export default rejectRequest;
