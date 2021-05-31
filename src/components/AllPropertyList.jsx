/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import React from 'react';
import Tokens from '../context/token';
import LoadingScreen from './LoadingScreen';
import getAllPropertiesExceptMine from '../controllers/getAllPropertiesExceptMine';
import PropertyList from './PropertyList';

const AllPropertyList = () => {
  const tokens = React.useContext(Tokens);
  const [loading, setLoading] = React.useState(true);
  const [properties, setProperties] = React.useState([]);
  const [changed, setChanged] = React.useState(0);
  React.useEffect(async () => {
    try {
      const response = await getAllPropertiesExceptMine(tokens);
      setProperties(response.property);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }, [changed]);
  return (
    <div>
      {loading ? <LoadingScreen /> : <PropertyList properties={properties} stateChange={{ changed, setChanged }} all={1} />}
    </div>
  );
};

export default AllPropertyList;
