import axios from 'axios';

const removeTenant = ({ tokens }, propertyId,
  leasedById) => new Promise((resolve, reject) => {
  axios({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
    baseURL: process.env.REACT_APP_URL,
    method: 'delete',
    url: '/tenant',
    data: {
      propertyId,
      leasedById,
    },
  })
    .then((response) => {
      resolve(response);
    })
    .catch((err) => {
      reject(err);
    });
});
export default removeTenant;
