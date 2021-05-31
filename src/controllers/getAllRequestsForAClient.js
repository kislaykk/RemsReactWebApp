/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import getProperty from './getProperty';
import getRequestForProperty from './getRequestForProperty';

// const getPropertyListId = ({ property }) => {
//   const array = [];
//   property.forEach((p) => {
//     array.push(p.id);
//   });
//   return array;
// };
const getRequests = (token, { property }) => new Promise((resolve, reject) => {
  const requestList = [];
  if (!property.length) resolve(requestList);
  else {
    for (let i = 0; i < property.length; i++) {
      getRequestForProperty(token, property[i].id)
        .then((requests) => {
          for (let j = 0; j < requests.request.length; j++) {
            requestList.push({
              request: requests.request[j],
              property: property[i].name,
            });
          }
          if (i + 1 === property.length) resolve(requestList);
        });
    }
  }
});
const getAllRequestsForAClient = async (token) => new Promise((resolve, reject) => {
  getProperty(token)
    .then((properties) => getRequests(token, properties))
    .then((requestList) => {
      resolve(requestList);
    });
});
export default getAllRequestsForAClient;
