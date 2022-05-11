import React from 'react';

const Container = ({ children }) => {
  return <div style={css}>{children}</div>;
};

const css = {
  width: 'min(100% - 20rem)',
  height: 'auto',
  margin: '0 auto',
};

export default Container;
