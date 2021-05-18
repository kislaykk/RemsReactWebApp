import axios from 'axios';

const signInController = ({
  email, password,
}) => new Promise((resolve, reject) => {
  axios({
    baseURL: process.env.REACT_APP_URL,
    method: 'post',
    url: '/client/signIn',
    data: {
      email,
      password,
    },
  })
    .then((response) => {
      resolve(response);
    })
    .catch((err) => {
      reject(err);
    });
});
export default signInController;
