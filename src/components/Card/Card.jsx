import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <li className="elements__item card">
      <img
        className="card__image"
        src="https://reactjsexample.com/content/images/2019/04/React.jpg"
        alt="React.js"
      />
      <div className="card__wrapper">
        <a className="card__categories" href="/#">Computers</a>
        <h4 className="card__title">React.js</h4>
        <p className="card__author">Timur Marokko</p>
      </div>
    </li>
  );
};

export default Card;
