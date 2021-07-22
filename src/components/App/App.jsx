import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Element from '../Element/Element';
import Card from '../Card/Card';

import booksApi from '../../utils/booksApi';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchSort, setSearchSort] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchSort);
    booksApi
      .getBooks(searchValue)
      .then((result) => {
        if (result) {
          setBooks(result.items);
        }

        console.log(result.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBookClick = (clickedBook) => {
    setSelectedBook(clickedBook);
    console.log(clickedBook)
  };

  const cardList = books.map((book) => {
    return <Card key={book.id} book={book} onCardClick={handleBookClick} />;
  });



  return (
    <section className="app">
      <Header
        handleSubmit={handleSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSearchCategory={setSearchCategory}
        setSearchSort={setSearchSort}
        searchCategory={searchCategory}
        searchSort={searchSort}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <Main cardList={cardList} books={books} />
          </Route>
          <Route exact path="/cards">
            <Element book={selectedBook} />
          </Route>
        </Switch>
      </Router>
    </section>
  );
};

export default App;
