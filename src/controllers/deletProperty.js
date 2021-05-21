import axios from 'axios';

const deleteProperty = ({ tokens }, { id }) => new Promise((resolve, reject) => {
  axios({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
    baseURL: process.env.REACT_APP_URL,
    method: 'delete',
    url: 'property',
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
export default deleteProperty;
