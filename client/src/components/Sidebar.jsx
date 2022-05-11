import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={css}>
      <div style={css}>Logo</div>
      <ul style={css}>
        <Link to='/feeds'>Explorer Feeds</Link>
        <Link to='/notifications'>Notifications</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/group'>Group</Link>
        <Link to='/settings'>Settings</Link>
        <Link to='/profiler'>Profile</Link>
      </ul>
    </div>
  );
};

const css = {
  display: 'flex',
  flexDirection: 'column',
};

export default Sidebar;
