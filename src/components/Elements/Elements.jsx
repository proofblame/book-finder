import React from 'react';
import './Elements.css';

import Card from '../Card/Card';

const Elements = () => {
  return (
    <section className="elements section">
      <ul className="elements__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </ul>
    </section>
  );
};

export default Elements;
