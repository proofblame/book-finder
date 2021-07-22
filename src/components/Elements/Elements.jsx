import React from 'react';
import './Elements.css';
import Card from '../Card/Card';

const Elements = ({ onCardClick, books }) => {


  // Рендер карточек на странице
  const cardList = books.map((book) => {
    return (
      <Card
        key={book.id}
        book={book}
        onCardClick={onCardClick}
      />
    );
  });

  return (
    <section className="elements section">
      <ul className="elements__list">{cardList}</ul>
    </section>
  );
};

export default Elements;
