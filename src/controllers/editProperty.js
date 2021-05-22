import axios from 'axios';

const editProperty = ({ tokens }, {
  id, name, street, locality, city, state, pin,
}) => new Promise((resolve, reject) => {
  axios({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
    baseURL: process.env.REACT_APP_URL,
    method: 'put',
    url: 'property/',
    data: {
      id,
      name,
      street,
      locality,
      city,
      pin,
      state,
    },
  })
    .then((response) => {
      resolve(response);
    })
    .catch((err) => {
      reject(err);
    });
});
export default editProperty;
