import React from 'react';
import { Sidebar, Feed, Chat } from '../components';

const Home = () => {
  return (
    <HomeFeed>
      <Sidebar />
      <Feed />
      <Chat />
    </HomeFeed>
  );
};

export const HomeFeed = {
  display: 'flex',
};

export default Home;
