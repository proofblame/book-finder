import React from 'react';
import './Main.css';

import Elements from '../Elements/Elements';

const Main = ({ cardList, books }) => {

  return (
    <main className="main section">
      <p className="main__subtitle">Found {books.length} results</p>
      <Elements 
      cardList={cardList} />
    </main>
  );
};

export default Main;
