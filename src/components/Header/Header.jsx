import React from 'react';
import './Header.css'

import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
  return (
    <header className='header section'>
      <h1 className="header__title">Search for books</h1>
      <SearchForm />
    </header>
  );
}

export default Header;
