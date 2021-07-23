import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
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
  const maxResults = 30;
  const [preloaderActive, setPreloaderActive] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/');
    setBooks([]);
    setPreloaderActive(true);
    setTotalItems(0);
    booksApi
      .getBooks(searchValue, searchSort, searchCategory, startIndex, maxResults)
      .then((result) => {
        if (result.totalItems !== 0) {
          setLoadQuantity(result.items.length);
          setTotalItems(result.totalItems);
          setBooks(result.items);
        } else {
          setNotFound(true);
          setTotalItems(0);
          setLoadQuantity(0);
          setBooks([]);
        }
      })
      .then(() => {
        setPreloaderActive(false);
        setNotFound(false);
        setStartIndex(startIndex + maxResults);
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
          setStartIndex(startIndex + maxResults);
          setBooks([...books, ...result.items]);
          setLoadQuantity(result.items.length);
        } else {
          setTotalItems(0);
        }
      }).then(() => {
        setPreloaderActive(false);
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
    </section>
  );
};

export default App;
