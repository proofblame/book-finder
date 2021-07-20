import React from 'react';
import './Element.css';

const Element = () => {
  return (
    <section class="element section">
      <div className="element__wrapper">
        <div className="element__figure">
          <img className="element__image" src="https://reactjsexample.com/content/images/2019/04/React.jpg" alt="React.js" />
        </div>

        <div className="element__body">
          <p className="element__categories">Art / General</p>
          <h4 className="element__title">React.js</h4>
          <p className="card__author">
            <a href="/#" className="element__link">Timur Marokko</a>
          </p>
          <p className="element__subtitle">About JavaScript Framework</p>
        </div>
      </div>
    </section>
  );
};

export default Element;
