import React from 'react';
import './Element.css';

const Element = ({ book }) => {
  return (
    <section className="element section">
      <div className="element__wrapper">
        <div className="element__figure">
          <img
            className="element__image"
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.medium ||
                  book.volumeInfo.imageLinks.small ||
                  book.volumeInfo.imageLinks.thumbnail
                : 'https://cima-afrique.org/cima/images/not-available.png'
            }
            alt={book.volumeInfo.title}
          />
        </div>

        <div className="element__body">
          <p className="element__categories">
            {book.volumeInfo.categories
              ? book.volumeInfo.categories
              : 'Категория не указана'}
          </p>
          <h4 className="element__title">
            {book.volumeInfo.title
              ? book.volumeInfo.title
              : 'Название не указано'}
          </h4>
          <p className="element__author">
            {book.volumeInfo.authors
              ? book.volumeInfo.authors
              : 'Автор не указан'}
          </p>
          <p className="element__subtitle">
            {book.volumeInfo.description
              ? book.volumeInfo.description
              : 'Описание отсутствует'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Element;
