import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ book, onCardClick }) => {
  function handleClick() {
    onCardClick(book);
  }

  return (
    <li className="elements__item card">
      <Link to="/cards" onClick={handleClick}>
        <img
          className="card__image"
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.medium ||
                book.volumeInfo.imageLinks.small ||
                book.volumeInfo.imageLinks.thumbnail
              : 'https://cima-afrique.org/cima/images/not-available.png'
          }
          alt={book.volumeInfo.title}
        />
      </Link>
      <div className="card__wrapper">
        <a className="card__categories" href="/#">
          {book.volumeInfo.categories
            ? book.volumeInfo.categories
            : 'Категория не указана'}
        </a>
        <Link to="/cards" onClick={handleClick}>
          <h4 className="card__title">
            {book.volumeInfo.title
              ? book.volumeInfo.title
              : 'Название не указано'}
          </h4>
        </Link>

        <p className="card__author">
          {book.volumeInfo.authors
            ? book.volumeInfo.authors
            : 'Автор не указан'}
        </p>
      </div>
    </li>
  );
};

export default Card;
