import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Element from '../Element/Element';

import booksApi from '../../utils/booksApi';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchSort, setSearchSort] = useState('relevance');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState();
  const [totalItems, setTotalItems] = useState(0);
  const [notFound, setNotFound] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks([]);
    booksApi
      .getBooks(searchValue, searchSort, searchCategory)
      .then((result) => {
        if (result.totalItems !== 0) {
          setBooks(result.items);
          setTotalItems(result.totalItems);
          setNotFound(false)
        } else {
          setTotalItems(result.totalItems)
          setNotFound(true)
        }

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBookClick = (clickedBook) => {
    setSelectedBook(clickedBook);
    console.log(clickedBook);
  };


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
            <Main 
            totalItems={totalItems} 
            onCardClick={handleBookClick}
            books={books}
            notFound={notFound}
            />
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
