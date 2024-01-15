/* eslint react/prop-types: 0 */
import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => (
  <div
    style={{ overflowY: 'scroll', border: '5px solid black', height: '700px' }}
  >
    {robots.map((user, i) => (
      <Card
        key={robots[i].id}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    ))}
  </div>
);

export default CardList;
