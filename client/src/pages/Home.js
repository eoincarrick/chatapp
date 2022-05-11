import React from 'react';
import { Sidebar, Feed, Chat } from '../components';

const Home = () => {
  return (
    <div style={css}>
      <Sidebar />
      <Feed />
      <Chat />
    </div>
  );
};

const css = {
  display: 'flex',
  justifyContent: 'space-between',
};

export default Home;
