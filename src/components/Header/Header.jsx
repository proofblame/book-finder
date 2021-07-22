import React from 'react';
import './Header.css';

import SearchForm from '../SearchForm/SearchForm';

const Header = ({
  handleSubmit,
  searchValue,
  setSearchValue,
  setSearchCategory,
  setSearchSort,
  searchCategory,
  searchSort,
}) => {
  return (
    <header className="header section">
      <h1 className="header__title">Search for books</h1>
      <SearchForm
        handleSubmit={handleSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSearchCategory={setSearchCategory}
        setSearchSort={setSearchSort}
        searchCategory={searchCategory}
        searchSort={searchSort}
      />
    </header>
  );
};

export default Header;
