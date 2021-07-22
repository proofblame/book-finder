import React from 'react';
import './Elements.css';

const Elements = ({ cardList }) => {
  return (
    <section className="elements section">
      <ul className="elements__list">{cardList}</ul>
    </section>
  );
};

export default Elements;
