import React from 'react';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
// import Grid from '@material-ui/core/Grid';

const LoadingScreen = () => (
  <div
    style={{
      position: 'absolute', left: '48%', top: '50%',
    }}
  >
    <HourglassEmptyIcon color="primary" style={{ fontSize: 50 }} />
  </div>
);

export default LoadingScreen;
