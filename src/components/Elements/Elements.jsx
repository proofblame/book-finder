import React, { useEffect } from 'react';
import './Elements.css';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';

const Elements = ({
  onCardClick,
  books,
  loadQuantity,
  handleLoadMore,
  preloaderActive,
}) => {
    // Рендер карточек на странице
    const cardList = books.map((book) => {
      return <Card key={book.id && book.etag} book={book} onCardClick={onCardClick} />;
    });
  useEffect(() => {

  }, [])


  const buttonState = preloaderActive ? (
    <Preloader/>
  ) : (
    <button
      className={
        preloaderActive ? 'elements__button_hidden' : 'elements__button'
      }
      type="button"
      onClick={handleLoadMore}
    >
      Load more
    </button>
  );

  return (
    <section className="elements section">
      <ul className="elements__list">{cardList}</ul>
      {loadQuantity === 30 ? buttonState : ''}
    </section>
  );
};

export default Elements;
