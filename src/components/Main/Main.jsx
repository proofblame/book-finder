import React from 'react';
import './Main.css';

import Elements from '../Elements/Elements';

const Main = ({ books, totalItems, onCardClick, notFound }) => {

  return (
    <main className="main section">
      <p className='main__subtitle'>
        {notFound ? 'Not Found' : `Found ${totalItems} results`}
      </p>
      <Elements onCardClick={onCardClick} books={books} />
    </main>
  );
};

export default Main;
