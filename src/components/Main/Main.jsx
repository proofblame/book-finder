import React from 'react';
import './Main.css';

import Elements from '../Elements/Elements';
import Preloader from '../Preloader/Preloader';

const Main = ({
  books,
  totalItems,
  onCardClick,
  notFound,
  handleLoadMore,
  loadQuantity,
  preloaderActive,
}) => {
  return (
    <main className="main section">
      {preloaderActive && !books ? (
        <Preloader />
      ) : (
        <>
          {totalItems === 0 ? (
            ''
          ) : (
            <p className="main__subtitle">
              {notFound ? 'Not Found' : `Found ${totalItems} results`}
            </p>
          )}
        </>
      )}
      <Elements
        onCardClick={onCardClick}
        books={books}
        handleLoadMore={handleLoadMore}
        loadQuantity={loadQuantity}
        preloaderActive={preloaderActive}
      />
    </main>
  );
};

export default Main;
