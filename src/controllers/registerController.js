import axios from 'axios';

const registerController = ({
  name, email, password, basedAt, phoneNo,
}) => new Promise((resolve, reject) => {
  axios({
    baseURL: process.env.REACT_APP_URL,
    method: 'post',
    url: '/client/register',
    data: {
      name,
      email,
      password,
      basedAt,
      phoneNo,

    },
  })
    .then((response) => {
      resolve(response);
    })
    .catch((err) => {
      reject(err);
    });
});
export default registerController;
