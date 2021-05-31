import axios from 'axios';

const getClientDetails = (id) => new Promise((resolve, reject) => {
  axios({
    baseURL: process.env.REACT_APP_URL,
    method: 'post',
    url: '/client/details',
    data: {
      id,
    },
  })
    .then((response) => { resolve(response.data); })
    .catch((error) => {
      reject(error);
    });
});

export default getClientDetails;
