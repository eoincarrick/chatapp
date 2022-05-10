import React from 'react';

const Container = ({ children }) => {
  return <div style={container}>{children}</div>;
};

const container = {
  width: 'min(100% - 10rem)',
  height: 'auto',
  margin: '0 auto',
};

export default Container;
