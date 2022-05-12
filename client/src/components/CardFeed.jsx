import React from 'react';

const CardFeed = () => {
  const data = {
    name: 'Christable Doe',
    age: 21,
    country: 'South Korea',
    photo:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  };

  const { photo } = data;
  const css = {
    backgroundImage: `url(${photo})`,
    width: '100%',
    height: '50em',
    backgroundRepeat: 'no-repeat',
    objectFit: 'contain',
  };
  return (
    <div style={css}>
      <h1>Hello</h1>
    </div>
  );
};

export default CardFeed;
