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
  const [loadQuantity, setLoadQuantity] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [maxResults, setMaxResults] = useState(30);
  const [preloaderActive, setPreloaderActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreloaderActive(true);
    setBooks([]);
    booksApi
      .getBooks(searchValue, searchSort, searchCategory, startIndex, maxResults)
      .then((result) => {
        if (result.items.length !== 0) {
          setPreloaderActive(false);
          setBooks(result.items);
          setTotalItems(result.totalItems);
          setLoadQuantity(result.items.length);
          setNotFound(false);
          setStartIndex(startIndex + maxResults);
        } else {
          setTotalItems(result.totalItems);
          setNotFound(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoadMore = () => {
    setPreloaderActive(true);
    booksApi
      .getBooks(searchValue, searchSort, searchCategory, startIndex, maxResults)
      .then((result) => {
        if (result.items.length !== 0) {
          setPreloaderActive(false);
          setStartIndex(startIndex + maxResults);
          setBooks([...books, ...result.items]);
          setLoadQuantity(result.items.length);
        } else {
          setTotalItems(0);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBookClick = (clickedBook) => {
    setSelectedBook(clickedBook);
  };

  return (
    <section className="app">
      <Router>
        <Header
          handleSubmit={handleSubmit}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setSearchCategory={setSearchCategory}
          setSearchSort={setSearchSort}
          searchCategory={searchCategory}
          searchSort={searchSort}
        />
        <Switch>
          <Route exact path="/">
            <Main
              totalItems={totalItems}
              onCardClick={handleBookClick}
              books={books}
              notFound={notFound}
              handleLoadMore={handleLoadMore}
              loadQuantity={loadQuantity}
              preloaderActive={preloaderActive}
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
