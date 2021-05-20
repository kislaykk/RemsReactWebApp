/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import React from 'react';
import Tokens from '../context/token';
import LoadingScreen from './LoadingScreen';
import getProperty from '../controllers/getProperty';
import PropertyList from './PropertyList';

const GetProperty = () => {
  const tokens = React.useContext(Tokens);
  const [loading, setLoading] = React.useState(true);
  const [properties, setProperties] = React.useState([]);
  React.useEffect(async () => {
    try {
      const response = await getProperty(tokens);
      setProperties(response.property);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? <LoadingScreen /> : <PropertyList properties={properties} />}
    </div>
  );
};

export default GetProperty;
